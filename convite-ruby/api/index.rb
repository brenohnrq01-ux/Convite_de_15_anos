# frozen_string_literal: true
require 'erb'

Handler = proc do |_request, response|
  template = File.read(File.expand_path('../views/index.erb', __dir__), encoding: 'UTF-8')
  response.status = 200
  response['Content-Type'] = 'text/html; charset=utf-8'
  response.body = ERB.new(template).result
end
