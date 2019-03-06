import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';


import {
    FacebookShareCount,
    GooglePlusShareCount,
    LinkedinShareCount,
    PinterestShareCount,
    VKShareCount,
    OKShareCount,
    RedditShareCount,
    TumblrShareCount,
} from 'react-share';
import {
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    GooglePlusIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    OKIcon,
    RedditIcon,
    TumblrIcon,
    LivejournalIcon,
    MailruIcon,
    ViberIcon,
    WorkplaceIcon,
    EmailIcon,
} from 'react-share';
import {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    RedditShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    MailruShareButton,
    ViberShareButton,
    WorkplaceShareButton,
    LineShareButton,
    EmailShareButton,
} from 'react-share';





class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Navbar: [
                {
                    placement: 'top',
                    text: 'Top'
                },
                {
                    placement: 'bottom',
                    text: 'Bottom'
                },
                {
                    placement: 'left',
                    text: 'Left'
                },
                {
                    placement: 'right',
                    text: 'Right'
                }
            ]
        };
    }



    render() {
        return (
            <div>
                < Navbar inline placement="bottom-end"  bg="light" >
                    <Navbar.Brand href="#home">Bad Bunny designs</Navbar.Brand>
                    
                        <FacebookShareButton right size={24} round={true} />
                    <FacebookShareCount url={'http://facebook.com'} /> <br /> 
                        <GooglePlusIcon right size={24} round={true} />
                      
                    
                </Navbar >
            </div>
        );

    }
}

export default Footer;