# ServerSideRenderingBoilerplate

Deployed at: https://babazon-ssr-boilerplate.herokuapp.com


## Features
Server Side Rendering
React Fiber
React Router 4
Redux (Thunk)
Isomorphic Javascript: Same Babel code on both Front and Back end
Code Splitting
Cache Busting
SEO optimisation via react-helmet
Materialise CSS

### TODO when deploying
Just set your host's URL as process.env.HOST , otherwise the server won't act as proxy to your API server.
On heroku this is `heroku config:set HOST=your-heroku-url`
On aws this is `eb setenv HOST=your-aws-url`
Don't forget to set NPM_CONFIG_PRODUCTION=false via heroku config:set NPM_CONFIG_PRODUCTION=false


## TODO for this boilerplate
* Experiment with adding GraphQL
* Add comments
* Build a demo api for authentication instead of just setting auth with a button. This will also make use of our cookie proxy setting
* Try to add react-hot-loader for HMR during dev
