# frozen_string_literal: true
require 'sinatra/base'

class ConviteApp < Sinatra::Base
  set :root, File.expand_path(__dir__)
  set :public_folder, File.join(root, 'public')
  set :views, File.join(root, 'views')

  get '/' do
    erb :index, layout: false
  end

  get '/convite' do
    erb :convite, layout: false
  end

  # Compatibilidade com links da versão HTML.
  get '/index.html' do
    redirect '/'
  end

  get '/convite.html' do
    redirect '/convite'
  end
end
