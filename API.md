- /user/add/{location}
`
body:{
  "l_name": "1234",
  "email": "37863",
  "mobile": null,
  "u_name": null,
  "pwd": null,
  "balance": 0.0,
  "Addrs": null,
  "car_data": null
  }`
- /user/login
`body:{"username":"","pwd":""}`
returns - `{"value":"failed"}` is login failed else returns User details
