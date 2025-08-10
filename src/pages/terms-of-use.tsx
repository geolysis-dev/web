import List from "@mui/material/List";
import CustomBox from "../components/CustomBox";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import Link from "../components/CustomLink";
import PATHS from "../utils/paths";

export default function TermsOfUsePage() {
  return (
    <CustomBox>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to={PATHS.LEGAL.ROOT} underline="hover" color="inherit">
          legal
        </Link>
        <Typography sx={{ color: "text.primary" }}>terms</Typography>
      </Breadcrumbs>

      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{ textAlign: "center", fontWeight: "bold", m: 4 }}
      >
        Terms of Use
      </Typography>

      <Typography variant="body1" sx={{ mt: 4 }}>
        Effective: July 07, 2025
      </Typography>

      <Typography variant="body1" sx={{ mt: 4 }}>
        Thank you for using Geolysis for Excel!
      </Typography>

      <Typography variant="body1" sx={{ mt: 4 }}>
        Welcome to <strong>Geolysis for Excel</strong>! These Terms of Use
        (“Terms”) govern your access to and use of the Geolysis Microsoft Excel
        Addin (the “Service”), operated by <strong>Geolysis LLC</strong> (“we,”
        “our,” or “us”). By accessing or using the Service, you agree to be
        bound by these Terms. If you do not agree, please do not use the
        Service.
      </Typography>

      <Typography variant="h5" component="h2" sx={{ mt: 4 }}>
        Eligibility
      </Typography>

      <Typography variant="body1" sx={{ mt: 2 }}>
        By using this Service, you represent and warrant that you have the legal
        capacity to enter into a binding agreement. There are no age
        restrictions on the use of this Service, but we do not knowingly collect
        information from children under the age of 13.
      </Typography>

      <Typography variant="h5" component="h2" sx={{ mt: 4 }}>
        Account Registration
      </Typography>

      <Typography variant="body1" sx={{ mt: 2 }}>
        To use the Service, you must create an account. You agree to provide
        accurate and complete information, including your full name and email
        address, and to keep this information up to date. You are responsible
        for maintaining the confidentiality of your login credentials and for
        all activities that occur under your account.
      </Typography>

      <Typography variant="h5" component="h2" sx={{ mt: 4 }}>
        Authentication
      </Typography>

      <Typography variant="body1" sx={{ mt: 2 }}>
        We use Microsoft Authentication Library (MSAL.js) to securely
        authenticate users through Microsoft's identity platform. By registering
        and logging into the Service, you agree to comply with the
        authentication process and any related security requirements.
      </Typography>

      <Typography variant="h5" component="h2" sx={{ mt: 4 }} gutterBottom>
        Acceptable Use
      </Typography>

      <Typography>You agree not to:</Typography>

      <List sx={{ listStyleType: "disc", pl: 4 }}>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Use the Service for any unlawful or unauthorized purpose;" />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Access, tamper with, or use non-public areas of the Service or our systems;" />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Reverse engineer, decompile, or disassemble any part of the Service;" />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Disrupt or interfere with the normal operation of the Service;" />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Use the Service to transmit any harmful or malicious content." />
        </ListItem>
      </List>

      <Typography variant="h5" component="h2" sx={{ mt: 4 }} gutterBottom>
        Intellectual Property
      </Typography>

      <Typography variant="body1" sx={{ mt: 2 }}>
        All content, features, and functionality of the Service, including
        software, text, graphics, and logos, are owned by Geolysis or our
        licensors and are protected by intellectual property laws. You may not
        use, reproduce, or distribute any content without our prior written
        consent.
      </Typography>

      <Typography variant="h5" component="h2" sx={{ mt: 4 }} gutterBottom>
        Termination
      </Typography>

      <Typography variant="body1" sx={{ mt: 2 }}>
        We reserve the right to suspend or terminate your account and access to
        the Service at any time, without notice, if you violate these Terms or
        engage in any conduct we deem harmful to other users or the Service.
      </Typography>

      <Typography variant="h5" component="h2" sx={{ mt: 4 }} gutterBottom>
        Disclaimer of Warranties
      </Typography>

      <Typography variant="body1" sx={{ mt: 2 }}>
        The Service is provided “as is” and “as available” without warranties of
        any kind, either express or implied. We do not guarantee that the
        Service will be uninterrupted, error-free, or free from viruses or other
        harmful components.
      </Typography>

      <Typography variant="h5" component="h2" sx={{ mt: 4 }} gutterBottom>
        Limitation of Liability
      </Typography>

      <Typography variant="body1" sx={{ mt: 2 }}>
        To the fullest extent permitted by law, Geolysis shall not be liable for
        any indirect, incidental, special, or consequential damages arising out
        of your use of the Service.
      </Typography>

      <Typography variant="h5" component="h2" sx={{ mt: 4 }} gutterBottom>
        Changes to Terms
      </Typography>

      <Typography variant="body1" sx={{ mt: 2 }}>
        We may update these Terms from time to time. We will notify you of any
        material changes by posting the new Terms on this page. Your continued
        use of the Service after changes constitute acceptance of the updated
        Terms.
      </Typography>

      <Typography variant="h5" component="h2" sx={{ mt: 4 }} gutterBottom>
        Contact Us
      </Typography>

      <Typography>
        If you have any questions about these Terms, checkout the contact page{" "}
        <Link to={PATHS.CONTACT} underline="always">
          here.
        </Link>
      </Typography>
    </CustomBox>
  );
}
