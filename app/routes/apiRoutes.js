// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of informaton in table-data, waitinglist, etc.

// ROUTING

module.exports = function(app, connection){ 
    
    
  // API GET requests
  // Below code handles when users "visit" a page
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api?admin... they are shown a JSON of the data in the table)
  app.get("/api/tables", function(req, res) {
      connection.query("SELECT * FROM friendlist", (err, data)=>{
        if (err) return res.status(500).end();
        res.json(data);
      });
  });



  app.post("/api/tables", function(req, res) {
      // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
      // It will do this by sending out the value "true" have a table
      // req.body is available since we're using the body parsing middleware
      connection.query("SELECT COUNT(*) AS COUNT FROM reservations WHERE waitlist = false", (err, data)=>{
        
        if (err) return res.status(500).end();
        // console.log(data[0].COUNT);
        
        if (data[0].COUNT < 5) {
          connection.query("INSERT INTO reservations (customerName, customerEmail, customerID, phoneNumber) VALUES (?,?,?,?)",[req.body.customerName, req.body.customerEmail, req.body.customerID, req.body.phoneNumber], (err,data)=>{
            if (err) return res.status(500).end();
            res.json(true);
          });
        }
        else {
          connection.query("INSERT INTO reservations (customerName, customerEmail, customerID, phoneNumber, waitlist) VALUES (?,?,?,?,?)",[req.body.customerName, req.body.customerEmail, req.body.customerID, req.body.phoneNumber, true], (err,data)=>{
            if (err) return res.status(500).end();
            res.json(false);
          });
        }
      });

      
    });
 
    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!
  
    app.post("/api/clear", function(req, res) {
      // Empty out the arrays of data
      // tableData = [];
      // waitListData =[];
      // WRITE ACTUAL QUERY
  
      res.json({ ok: true });
   
    });
  
  }