exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Express', name: 'Kaleb' }); //gets from views directory 
}

exports.submit_lead = function(req, res, next) {
    console.log("lead email:", req.body.lead_email);
    res.redirect('/');
}