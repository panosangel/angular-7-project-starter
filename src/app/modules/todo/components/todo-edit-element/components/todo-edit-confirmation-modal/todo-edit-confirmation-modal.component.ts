import {AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-edit-confirmation-modal-component',
  templateUrl: './todo-edit-confirmation-modal.component.html',
})
export class TodoEditConfirmationModalComponent implements AfterViewInit {
  @ViewChild('content') content: ElementRef;
  @Output() modalIsClosed = new EventEmitter();
  modal: NgbModalRef;

  constructor(
    private modalService: NgbModal,
    private router: Router,
  ) {
  }

  ngAfterViewInit() {
    // Used to avoid a bug with older version of Angular.
    // https://github.com/ng-bootstrap/ng-bootstrap/issues/1775
    setTimeout(() => {
      this.showModal(this.content);
    });
  }

  showModal(content) {
    this.modal = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  closeModal() {
    this.modal.close();
    this.modalIsClosed.emit();
  }

  goBack() {
    this.closeModal();
    this.router.navigate(['/home']);
  }
}
