import {Box,Container,List, ListItem,ListItemText,Typography,} from "@mui/material";
import React from "react";
import Header from "../commoncomponent/header/Header";
import Navbar from "../commoncomponent/header/Navbar";
import Footer from "../commoncomponent/footer/Footer";

function PrivacyPolicy() {
  return (
    <>
      <Header />
      <Navbar />
      <Box>
        <Container maxWidth="lg">
          <Box my={4} sx={{ color: "#6084a4", lineHeight: "1.8" }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                my: 5,
                justifyContent: "center",
                textAlign: "center",
                color: "black !important",
              }}
            >
              Privacy Policy
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Last Revised on April 25, 2023
            </Typography>
            <Typography paragraph sx={{ color: "#6084a4" }}>
              Welcome to Swiftex.com website (Employee of The Month) (the “site”
              / “Swiftex”), Operated by Swiftex LLP., a company incorporated
              under the Companies Act 2013 (“we”, “us” or “our”). We share your
              concerns about the protection of your personal information online.
              This privacy policy (“Policy”) describes how we maintain the
              privacy of the personal information that we collect online in
              connection with our product and other services.
            </Typography>

            <Typography paragraph sx={{ color: "#6084a4" }}>
              Our visitors have the full right to know what information we
              collect and how it is used. Our policy is applicable to all the
              services and products offered by us. Our policy is based upon the
              principles of Privacy, Security, Decision, Choice, Access, Use,
              Data Integrity, and Enforcement
            </Typography>
            <Typography paragraph sx={{ color: "#6084a4" }}>
              Your acceptance of this policy by Registering, Using, and visiting
              the Site represents that you give us your consent to for us to
              collect the information. You also express your consent for the
              user and disclosure of the visitors’ personal information
              according to the Policy. By Visiting and using the Site, you also
              agree to abide by our Terms and condition. If you have any
              queries, you can express those concerns with us at
              info@swiftexinternational.com.
            </Typography>

            <Typography paragraph>
              Please note that this Policy tends to have changes made to it to
              address new issues and concerns of the future related to company,
              product or laws related changes. We reserve the whole right to
              revise or make any changes to the policy, and you continue use of
              the Site subsequent to any changes to this Policy will mean that
              you agree to these said changes or revision of this Policy.
            </Typography>

            <Typography paragraph>
              Therefore, please bookmark this page and review it periodically to
              assure familiarity with the most current version of the Policy. We
              will post and notify you regarding all changes and revisions made
              to this Policy to keep you up to date.
            </Typography>

            <Typography paragraph>
              You can check the top part of this Policy to check the last
              revised date of this Policy. If due to such changes and revision,
              you decide that you want to delete any portion of your personal
              information from our database, please do notify us at
              info@swiftexinternational.com.
            </Typography>

            <Box>
              <Typography>
                Collection of Information <br />
                Here is the list of various ways we use for collecting
                information -
              </Typography>
              <Typography>
                <strong style={{ color: "#6084a4" }}>
                  {" "}
                  Information through registration -{" "}
                </strong>{" "}
                We collect information from our users when they register at
                SwiftEx. The Registration is needed when signing Up or creating
                a new account on the SwiftEx, any of its services or promotions.
                We collect information such as your Email Address, Name,
                Password and your contact number if needed of your SwiftEx
                account.
              </Typography>

              <Typography sx={{ py: 2 }}>
                <strong style={{ color: "#6084a4" }}>Log information - </strong>{" "}
                Access to SwiftEx Services requires an automatic record of
                information. Your Browser sends this information by default
                whenever you visit the Site. This information is known as the
                Log information and is stored as the Log History. It includes
                your IP address, Web Request, Browser Type and Language and the
                time and date of your request.
              </Typography>

              <Typography sx={{ py: 1 }}>
                <strong style={{ color: "#6084a4" }}>Cookies - </strong> Some
                cookies are sent by the website to your device in order to
                identify your browser. Cookies are small strings of characters
                which are used for user authentication. Also, they work for
                improvement of the service quality through tracking of user’s
                choice and storage of user’s preference.
              </Typography>

              <Typography sx={{ py: 1 }}>
                <strong style={{ color: "#6084a4" }}>
                  User communication -
                </strong>{" "}
                At the time you carry out communication or send Email through
                SwiftEx, some communication may be retained for processing your
                inquiries. This will improve our services and also help us to
                respond better to your request and serve you better.
              </Typography>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography
                variant="body1"
                gutterBottom
                style={{ color: "#6084a4" }}
              >
                We process the information at Swiftex for multiple purposes in
                order to offer good results to the users. The information is
                processed for-
              </Typography>
              <List sx={{ listStyleType: "disc", pl: 4 }}>
                <ListItem sx={{ display: "list-item", py: 0.1 }}>
                  <ListItemText primary="Aggregation of patterns, trends, and statistics of the users." />
                </ListItem>
                <ListItem sx={{ display: "list-item", py: 0.1 }}>
                  <ListItemText primary="Audit, research, and analysis for protection, maintenance, and improvement of services." />
                </ListItem>
                <ListItem sx={{ display: "list-item", py: 0.1 }}>
                  <ListItemText primary="Use of data for marketing. However, at any point, the data will NOT be shared with any third party without the express consent of the user." />
                </ListItem>
                <ListItem sx={{ display: "list-item", py: 0.1 }}>
                  <ListItemText primary="Personalization of various offers and products offered by us and our trusted business partners to registered users from time to time." />
                </ListItem>
                <ListItem sx={{ display: "list-item", py: 0.1 }}>
                  <ListItemText primary="Improving overall services by conducting market research to analyze market trends, customer demographics, etc., to perform data analytics." />
                </ListItem>
              </List>
              <Typography
                variant="body1"
                gutterBottom
                style={{ color: "#6084a4" }}
              >
                We do not use the customer data for any of the purposes other
                than those mentioned above.
              </Typography>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Customer Information
              </Typography>
              <Typography paragraph sx={{ color: "#6084a4" }}>
                We will not share, distribute, review or refer customer data
                I.e., host data and information. The customer data is used or
                reviewed only in case it is required for any support issues,
                resolving any problem or if required by laws as per mentioned in
                terms of services. Customers are expected to bear the
                responsibility of keeping the user id and password secure and
                confidential.
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
                Data Integrity
              </Typography>
              <Typography paragraph sx={{ color: "#6084a4" }}>
                The information collected by the site is used only for the
                purpose it has been mentioned inthe Policy. The data collection
                is stored and processed for ensuring the collection and storage
                of the personal information of users in order to improve the
                services. Reasonable steps are taken by the site for ensuring
                the accuracy and updating of information. In this process, we
                are dependent on our customers for updating and correcting the
                information if required.{" "}
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
                Information Sharing
              </Typography>
              <Typography paragraph sx={{ color: "#6084a4", mt: 2 }}>
                We share the information with other individuals and companies
                only in the following situations
              </Typography>
              <Typography paragraph sx={{ color: "#6084a4" }}>
                The information collected from our users is provided to our
                affiliated companies, subsidiaries and trusted business partners
                for processing personal information for us. We ensure that these
                parties work to process the information according to our
                instructions and privacy policy. We ensure the maintenance of
                security and confidentiality of the information during its
                processing.
              </Typography>
            </Box>

            <Box sx={{ mt: 4 }}>
              <Typography
                variant="body1"
                gutterBottom
                style={{ color: "#6084a4" }}
              >
                The information is required to be accessed, used, disclosed or
                preserved for the following reasons —
              </Typography>
              <List sx={{ listStyleType: "disc", pl: 4 }}>
                <ListItem sx={{ display: "list-item", py: 0.1 }}>
                  <ListItemText primary="For satisfaction of any regulation, law or legal procedure" />
                </ListItem>
                <ListItem sx={{ display: "list-item", py: 0.1 }}>
                  <ListItemText primary="For enforcing the applicable terms of services" />
                </ListItem>
                <ListItem sx={{ display: "list-item", py: 0.1 }}>
                  <ListItemText primary="For investigation of violation of rules" />
                </ListItem>
                <ListItem sx={{ display: "list-item", py: 0.1 }}>
                  <ListItemText primary="For prevention of fraudulent activities" />
                </ListItem>
                <ListItem sx={{ display: "list-item", py: 0.1 }}>
                  <ListItemText primary="To avoid technical issues" />
                </ListItem>
                <ListItem sx={{ display: "list-item", py: 0.1 }}>
                  <ListItemText primary="For protection against threats to the rights and safety" />
                </ListItem>
              </List>
              <Typography
                variant="body1"
                gutterBottom
                style={{ color: "#6084a4" }}
              >
                If we require revealing personal information in case, we need to
                be involved in selling some or all the assets, a notice is sent
                to the user before transferring the public information. In such
                cases, the information is subjected to a different privacy
                policy further.
              </Typography>
            </Box>

            <Box sx={{ mt: 4 }}>
              <Typography variant="subtitle1" gutterBottom>
                Public Forums
              </Typography>
              <Typography paragraph sx={{ color: "#6084a4", mt: 3 }}>
                We may use blogs, chat rooms and bulletin boards on the Site.
                The personal information selected for submission in such kind of
                forum can be collected, read or used by other visitors to the
                forum. This may be used also for sending in explicit content to
                you by fraudulent users. We will not hold the responsibility of
                protecting the personally identifiable information that you
                choose to submit in the forums.{" "}
              </Typography>

              <Typography variant="subtitle1" gutterBottom sx={{ my: 3 }}>
                Access and Update of information
              </Typography>
              <Typography paragraph sx={{ color: "#6084a4" }}>
                Every customer at SwiftEx may edit or update the registration
                information or any other information by editing the user record.
                You must login to the relevant website for updating the
                information in the user profile. Employees of an organization
                may get the registration information through their HR
                Administrator. Please send an Email to
                info@swiftexinternational.com., if you want to discontinue your
                account. Your request for accessing, changing or deleting the
                information will be considered within 7 days.{" "}
              </Typography>

              <Typography variant="subtitle1" gutterBottom sx={{ my: 2 }}>
                Security
              </Typography>
              <Typography paragraph sx={{ color: "#6084a4", mt: 2 }}>
                We use hi-tech security measures for maintaining accuracy,
                protecting customer data from unauthorized access and ensuring
                appropriate use of the data. As modern web browsers are also
                used for accessing the service, robust transport layer security
                technology is used for protecting the customer data through data
                encryption and server authentication. The technology is capable
                enough to keep the data safe and secure. The information is
                available only to the customer who owns it. An advanced security
                method has been implemented by the website for prevention of
                interference and unauthenticated access. The security method is
                based upon encoded session identifications which uses firewall
                and advanced security technology. Some improved security
                features are availed to the customers for configuration of
                security settings to a higher level.{" "}
              </Typography>
              <Typography paragraph sx={{ color: "#6084a4" }}>
                However, you should also recognize that there is no such thing
                as “perfect security” on the internet, and we cannot guarantee
                the security of your information. In addition, because internet
                communications are unsecure, it is also possible that the
                information you supply to us or your access of any information
                via the Site will be intercepted during transmission. We are not
                liable for any breach of our systems or interception of our
                transmission, and we hereby fully disclaim, to the fullest
                extent possible under law, any liability associated with any
                claim relating to a breach of security, data or information.{" "}
              </Typography>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Compliance with Laws
              </Typography>
              <Typography paragraph sx={{ color: "#6084a4" }}>
                We reserve the right to disclose any information to comply with
                any law, regulation, decree, judgment, order, subpoena or any
                other governmental order (“Order”) without any obligation to
                contest or verify the accuracy of such Order.{" "}
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
                Applicable Laws
              </Typography>
              <Typography paragraph sx={{ color: "#6084a4" }}>
                This Policy will be governed by and construed in accordance with
                the laws of India, without regard to any principles of conflicts
                of law. You agree that any action at law or in equity that
                arises out of or relates to any use of the Site will be filed
                only in the courts of Bengaluru, and you hereby consent and
                submit to the personal jurisdiction of such courts for the
                purposes of litigating any such action.{" "}
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
                Miscellaneous
              </Typography>
              <Typography paragraph sx={{ color: "#6084a4", mt: 2 }}>
                The section titles in this Policy are for convenience only and
                have no legal or contractual effect. Some of the services may be
                subject to additional terms and conditions regarding privacy and
                use of information. Your use of those services is subject to
                those terms and conditions, which are incorporated into this
                Policy by reference. In the event of an inconsistency between
                this Policy and any additional posted conditions, the provisions
                of the additional conditions shall control.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
