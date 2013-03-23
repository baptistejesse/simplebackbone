require 'rubygems'
require 'sinatra'

set :public, File.dirname(__FILE__) + '/js'


get '/' do
  
  
"hello"  
  
 erb :home 
  
end