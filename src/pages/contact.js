import { useTranslation } from "react-i18next";
import { Modal, Box, Button } from "@mui/material";
import { useState } from "react";
import zaloQR from "../assets/images/zalo-QR.jpg";

export default function Contact() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    bgcolor: "background.paper",
    borderRadius: "10px",
    pt: 2,
    px: 4,
    pb: 3,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="contact-content">
        <Modal open={open} onClose={handleClose} className="modal-container">
          <Box sx={{ ...style }}>
            <h4>Bing me 👇</h4>
            <img src={zaloQR} width={"70%"} alt=""></img>
            <div>
              <Button onClick={handleClose}>Close</Button>
            </div>
          </Box>
        </Modal>

        <div className="contact-body">
          <h1>{t("Get In Touch")}</h1>
          <p>{t("contact-content")}</p>
          <div className="btn" onClick={handleOpen}>
            {t("Say Hello")}
          </div>
        </div>

        <div className="contact-footer">
          <p>© Copyright 2023</p>
          <hr />
          <p>
            Designed & Built by <b>NguyenNguyen</b>
          </p>
        </div>
      </div>
    </div>
  );
}
