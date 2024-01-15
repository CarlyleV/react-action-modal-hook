class ModalError extends Error {
  public constructor() {
    super('useModal must be used within a ModalProvider');
  }
}

export default ModalError;
