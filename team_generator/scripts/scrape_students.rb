require "open-uri"
require 'json'
require 'watir'
require 'dotenv/load'

def scrape_students(batch, output_path)
  students = []
  url = "https://kitt.lewagon.com/camps/#{batch}/products"

  browser = Watir::Browser.new

  browser.goto url
  link = browser.div(class: 'sign-in-content').children(tag_name: "a").last
  link.click

  account_field = browser.text_field(id: 'login_field')
  account_field.set "yann.klein@me.com"

  account_field = browser.text_field(id: 'password')
  account_field.set ENV['GITHUB_KEY']

  link = browser.input(class: 'js-sign-in-button')
  link.click

  students = browser.divs(class: 'product-main').map do |team|
    team.imgs('data-original-title': true).map do |student|
      { 
        name: student.attribute_value("data-original-title"),
        img: student.src,
        team: team.element(tag_name: "h2").text
      }
    end
  end
  File.open(output_path, "wb") do |file|
    file.write(JSON.generate(students))
  end

  browser.close
end