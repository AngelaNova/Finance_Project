import React from 'react';

const DeleteModal = ({deleteId, onConfirm, onCancel }) => {

  const handleConfirm = () => {
    onConfirm();
    onCancel();
  };

  return (
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Delete Confirmation</h5>
            <button type="button" className="close" onClick={onCancel} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Are you sure that you would like to delete the expense with id:  ?</p>
          </div>
          <div class="modal-footer">
            <button type="button" onClick={handleConfirm} class="btn btn-danger">Delete</button>
            <button type="button" onClick={onCancel} class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal;
