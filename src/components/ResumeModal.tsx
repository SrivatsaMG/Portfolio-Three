import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import "./styles/ResumeModal.css";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <div className={`resume-modal-overlay ${isOpen ? "active" : ""}`} onClick={onClose}>
      <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="resume-modal-close" onClick={onClose}>
          <IoClose />
        </button>
        <div className="resume-modal-header">
          <h2>My Resume</h2>
          <a href="/resume.pdf" download className="resume-download-btn">
            Download PDF
          </a>
        </div>
        <div className="resume-modal-body">
          <iframe src="/resume.pdf" title="Resume" />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
