import "./NGOForm.css";
const NGOForm = ({ onClose }) => {
  return (
    <div className="ngo-form">
      <div className="ngo-form-child" />
      <i className="shadox">Shadox</i>
      <div className="ngo-form-item" />
      <i className="cbe-ngo">
        <p className="cbe-ngo1">CBE NGO</p>
      </i>
      <div className="ngo-form-inner" />
      <i className="coimbatore">Coimbatore</i>
      <div className="ngo-form-child1" />
      <i className="donate-pts">Donate pts</i>
      <i className="yes">Yes</i>
      <i className="no">No</i>
      <div className="ngo-form-child2" />
      <div className="ngo-form-child3" />
      <div className="ngo-form-child4" />
      <div className="if-yes-enter">If yes enter points</div>
      <div className="ngo-form-child5" />
      <div className="enter-a-brief">
        Enter a brief description in why you need help and add extra doc if
        needed
      </div>
      <div className="ngo-form-child6" />
      <img
        className="documentsadd-document-icon"
        alt=""
        src="/documentsadddocument.svg"
      />
      <div className="upload-docs-if">Upload docs if any</div>
      <div className="ngo-form-child7" />
      <i className="submit">Submit</i>
    </div>
  );
};

export default NGOForm;
