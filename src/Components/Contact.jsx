import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
} from "@mui/material";

function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <Container>
        {/* Page Heading */}
        <Typography
          variant="h4"
          className="text-4xl font-extrabold text-gray-800 mb-10 text-center"
        >
          Get in Touch with Us
        </Typography>

        {/* Introduction Section */}
        <Typography
          variant="h5"
          className="text-xl text-gray-700 mb-10 text-center mt-20"
        >
          Whether you’re planning an event, need assistance, or have any
          questions, we’re here to help. Reach out to us through the form below
          or connect with us directly!
        </Typography>

        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              className="text-3xl font-bold text-gray-800 mb-6"
            >
              Contact Information
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-4">
              <strong>Phone:</strong> +1 (123) 456-7890
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-4">
              <strong>Email:</strong> info@eventnexus.com
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-4">
              <strong>Address:</strong> 123 Event Street, Celebration City, EC
              12345
            </Typography>
            <Typography
              variant="h6"
              className="text-2xl font-semibold text-gray-800 mb-4"
            >
              Office Hours
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-2">
              Monday to Friday: 9:00 AM - 6:00 PM
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-2">
              Saturday: 10:00 AM - 4:00 PM
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-4">
              Sunday: Closed
            </Typography>
          </Grid>

          {/* Follow Us Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              className="text-3xl font-bold text-gray-800 mb-6"
            >
              Follow Us
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-4">
              Stay connected with us for the latest updates, upcoming events,
              special offers, and more.
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-4">
              <strong>Facebook:</strong>{" "}
              <a
                href="https://facebook.com/eventnexus"
                className="text-pink-600 hover:underline"
              >
                facebook.com/eventnexus
              </a>
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-4">
              <strong>Instagram:</strong>{" "}
              <a
                href="https://instagram.com/eventnexus"
                className="text-pink-600 hover:underline"
              >
                instagram.com/eventnexus
              </a>
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-4">
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://linkedin.com/company/eventnexus"
                className="text-pink-600 hover:underline"
              >
                linkedin.com/company/eventnexus
              </a>
            </Typography>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12}>
            <Typography
              variant="h5"
              className="text-3xl font-bold text-gray-800 mb-6"
            >
              Send Us a Message
            </Typography>
            <form>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                    className="bg-gray-50 border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    className="bg-gray-50 border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    required
                    className="bg-gray-50 border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="success"
                    type="submit"
                    className="w-40 bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-lg shadow-md"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Contact;
