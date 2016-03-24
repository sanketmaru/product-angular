{  
  
  "dir": "dist",
  "mainConfigFile":"./main.js",

  optimize:"none",

  "modules": [{ 
    name: "app",
    name:"dashboard-module" 
  }],

  paths: {
    app: './app',  
    'dashboard-module'  :'js/components/dashboard/dashboard-module'
  }

  
}