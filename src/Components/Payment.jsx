import { Box, Button, Typography, Card, CardContent } from "@mui/material";
import { useLocation } from "react-router-dom";
import UpiIcon from "@mui/icons-material/Payment";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { jsPDF } from "jspdf";

export default function Payment() {
  const location = useLocation();
  const { ticketCount, totalAmount, event } = location.state || {};

  const taxRate = 0.02;
  const totalAmountWithTax = totalAmount * (1 + taxRate);

  const handlePayNow = () => {
    const doc = new jsPDF();
    const eventDetails = `
      Event Ticket
      Event Name: ${event.eventName}
      Event Date: ${event.eventDate}
      Event Time: ${event.eventTime}
      Event Location: ${event.eventAddress}
      Number of Tickets: ${ticketCount}
      Total Amount: ${totalAmount}
      Tax (2%): ${(totalAmount * taxRate).toFixed(2)}
      Total Amount with Tax: ${totalAmountWithTax.toFixed(2)}
      Ticket ID: ${Math.random().toString(36).substring(2, 15)}
    `;
    doc.text(eventDetails, 10, 10);
    doc.save("ticket.pdf");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        p: 4,
        marginTop: "90px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          width: "100%",
          p: 4,
          backgroundColor: "#ffffff",
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              fontWeight: "bold",
              fontSize: "2rem",
              color: "#333",
              textAlign: "center",
            }}
          >
            Payment Modes
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              mb: 4,
              gap: 2,
            }}
          >
            <Button
              variant="outlined"
              sx={{
                borderColor: "#ccc",
                color: "#333",
                borderRadius: 2,
                fontSize: "1.1rem",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <MonetizationOnIcon sx={{ mr: 1, fontSize: "1.5rem" }} />
              Internet Banking
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#ccc",
                color: "#333",
                borderRadius: 2,
                fontSize: "1.1rem",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <UpiIcon sx={{ mr: 1, fontSize: "1.5rem" }} />
              UPI Payment
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#ccc",
                color: "#333",
                borderRadius: 2,
                fontSize: "1.1rem",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <CreditCardIcon sx={{ mr: 1, fontSize: "1.5rem" }} />
              Credit/Debit Card
            </Button>
          </Box>
          <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
            Total Amount:{" "}
            <span style={{ fontWeight: "bold" }}>
              ₹{totalAmount.toFixed(2)}
            </span>
          </Typography>
          <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
            Tax (2%):{" "}
            <span style={{ fontWeight: "bold" }}>
              ₹{(totalAmount * taxRate).toFixed(2)}
            </span>
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, textAlign: "center" }}>
            Total Amount with Tax:{" "}
            <span style={{ fontWeight: "bold" }}>
              ₹{totalAmountWithTax.toFixed(2)}
            </span>
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#d33d77",
              color: "#fff",
              width: "100%",
              "&:hover": {
                bgcolor: "#c81d62",
              },
              "&:focus": {
                ringColor: "#c81d62",
              },
            }}
            onClick={handlePayNow}
          >
            Pay Now
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
