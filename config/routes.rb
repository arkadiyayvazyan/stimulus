Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
   get "hello", to: "hello#index"
   get "clipboard", to: "clipboard#index"
   get "slideshow", to: "slideshow#index"
end
