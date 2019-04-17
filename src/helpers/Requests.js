class Requests {

  get(url){
    return fetch(url)
    .then((res) => res.json());
  }

  post(url, payload){
    return fetch(url, {
      method: "POST",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(payload)
    })
  }

  delete(url){
    return fetch(url, {
      method: "DELETE",
      headers:{"Content-Type": "application/json"}
    })
  }

  update(url, payload){
    console.log("About to PUT this to database:", payload)

    // const booking={
    //   "billpaid" : false,
    //   "checkedin": false,
    //   "partysize": "10",
    //   "room": "http://localhost:8080/api/rooms/121",
    //   "guest" : "http://localhost:8080/api/guests/3",
    //   "bookingdates": ["2019-05-23", "2019-05-24", "2019-05-25"]
    //
    // }

    return fetch(url, {
      method: "PUT",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(payload)
    })
  }

  patch(url, payload){
    console.log("About to PUT this to database:", payload)
    return fetch(url, {
      method: "PATCH",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(payload)
    })
  }

}
export default Requests;
