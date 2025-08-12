import List from "@mui/material/List";
import CustomBox from "../components/CustomBox";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link as MuiLink } from "@mui/material";

import LegalPageBreadcrumbs from "../components/LegalPageBreadcrumbs";
import Link from "../components/CustomLink";
import PATHS from "../utils/paths";

export default function PrivacyPolicyPage() {
  return (
    <CustomBox>
      <LegalPageBreadcrumbs pathSlug="privacy" />

      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{ textAlign: "center", fontWeight: "bold", m: 4 }}
      >
        Privacy Policy
      </Typography>

      <Typography variant="body1" sx={{ mt: 4 }}>
        Effective: July 07, 2025
      </Typography>

      <Typography variant="body1" sx={{ mt: 4 }}>
        Geolysis (“we,” “us,” or “our”) respects your privacy and is committed
        to protecting it through this Privacy Policy. This policy describes the
        types of information we may collect from you or that you may provide
        when using the Geolysis Microsoft Excel Addin (the “Service”) and how we
        use, maintain, and protect that information.
      </Typography>

      <Typography variant="h5" component="h2" sx={{ mt: 4 }} gutterBottom>
        Information we collect
      </Typography>

      <Typography>
        We collect the following personal information when you register an
        account or contact us:
      </Typography>

      <List sx={{ listStyleType: "disc", pl: 4 }}>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Full name" />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Email address" />
        </ListItem>
      </List>

      <Typography variant="h5" component="h2" sx={{ mt: 4 }} gutterBottom>
        How We Use Your Information
      </Typography>

      <Typography>We use the information we collect to:</Typography>

      <List sx={{ listStyleType: "disc", pl: 4 }}>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Create and manage your user account" />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Respond to your support inquiries" />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Improve the functionality of our Service" />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText
            primary="Communicate updates or relevant information related to your
                    use of the Service"
          />
        </ListItem>
      </List>

      <Typography variant="h5" component="h2" sx={{ mt: 4 }} gutterBottom>
        Authentication and Microsoft Identity Platform
      </Typography>

      <Typography variant="body1" sx={{ mt: 4 }}>
        We use Microsoft Authentication Library (MSAL.js) to authenticate users
        via Microsoft's identity platform. This process involves the collection
        and processing of certain personal information (such as tokens and
        identifiers) by Microsoft to facilitate secure sign-in.
      </Typography>

      <Typography variant="body1" sx={{ mt: 2 }}>
        Please refer to Microsoft's{" "}
        <MuiLink
          href="https://privacy.microsoft.com/en-US/privacystatement"
          target="_blank"
          rel="noopener noreferrer"
          underline="always"
        >
          Privacy Statement
        </MuiLink>{" "}
        for details on how your information is handled by their identity
        services.
      </Typography>

      <Typography variant="h5" component="h2" sx={{ mt: 4 }} gutterBottom>
        Sharing of Information
      </Typography>

      <Typography variant="body1" sx={{ mt: 4 }}>
        We do <strong>not</strong> sell, rent, or trade your personal
        information to third parties. We may share your data only if required by
        law or in response to valid legal requests.
      </Typography>

      <Typography variant="h5" component="h2" sx={{ mt: 4 }} gutterBottom>
        Data Security
      </Typography>

      <Typography variant="body1" sx={{ mt: 4 }}>
        We take reasonable technical and organizational precautions to protect
        your personal data from unauthorized access, use, or disclosure.
      </Typography>

      <Typography variant="h5" component="h2" sx={{ mt: 4 }} gutterBottom>
        Data Retention
      </Typography>

      <Typography variant="body1" sx={{ mt: 4 }}>
        We retain your personal information only for as long as necessary to
        fulfill the purposes outlined in this policy, unless a longer retention
        period is required by law.
      </Typography>

      <Typography variant="h5" component="h2" sx={{ mt: 4 }} gutterBottom>
        Your Rights
      </Typography>

      <Typography>
        Depending on your location, you may have rights regarding your personal
        data, including the right to:
      </Typography>

      <List sx={{ listStyleType: "disc", pl: 4 }}>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Access the information we hold about you" />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Request corrections to any inaccurate information" />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Request deletion of your data" />
        </ListItem>
      </List>

      <Typography variant="body1" sx={{ mt: 2 }}>
        To exercise any of these rights, checkout the contact page{" "}
        <Link to="/contact" underline="always">
          here.
        </Link>
      </Typography>

      <Typography variant="h5" component="h2" sx={{ mt: 4 }} gutterBottom>
        Third-Party Services
      </Typography>

      <Typography variant="body1" sx={{ mt: 4 }}>
        We do not currently use third-party services that collect or process
        your data (such as analytics, ads, or social login).
      </Typography>

      <Typography variant="h5" component="h2" sx={{ mt: 4 }} gutterBottom>
        Cookies
      </Typography>

      <Typography variant="body1" sx={{ mt: 4 }}>
        We do not use cookies or other tracking technologies at this time.
      </Typography>

      <Typography variant="h5" component="h2" sx={{ mt: 4 }} gutterBottom>
        Children's Privacy
      </Typography>

      <Typography variant="body1" sx={{ mt: 4 }}>
        We do not knowingly collect personal data from children under the age of
        13. If you believe a child has provided us with personal information,
        please contact us immediately.
      </Typography>

      <Typography variant="h5" component="h2" sx={{ mt: 4 }} gutterBottom>
        Changes to This Policy
      </Typography>

      <Typography variant="body1" sx={{ mt: 4 }}>
        We may update this Privacy Policy from time to time. We will notify you
        of any significant changes by posting the new policy on this page.
      </Typography>

      <Typography variant="h5" component="h2" sx={{ mt: 4 }} gutterBottom>
        Contact Us
      </Typography>

      <Typography>
        If you have any questions about this Privacy Policy, checkout the
        contact page{" "}
        <Link to={PATHS.CONTACT} underline="always">
          here.
        </Link>
      </Typography>
    </CustomBox>
  );
}
