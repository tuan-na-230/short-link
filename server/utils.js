module.exports = {
    PushRecentLink: (req, item) => {
        if(!req.session.recentLinks.link1) {
            return req.session.recentLinks.link1 = item
        }
        if(!req.session.recentLinks.link2) {
            return req.session.recentLinks.link2 = item
        }
        if(!req.session.recentLinks.link3) {
            return req.session.recentLinks.link3 = item
        }
        else {
            let oldLink1 = req.session.recentLinks.link1
            let oldLink2 = req.session.recentLinks.link2
            req.session.recentLinks.link1 = item
            req.session.recentLinks.link2 = oldLink1
            req.session.recentLinks.link3 = oldLink2
            return
        }
    }
}
