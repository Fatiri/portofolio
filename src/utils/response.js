import Swal from "sweetalert2"

export function ResponseMessage(status, message) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    if (status === "success") {
        Toast.fire({
            icon: 'success',
            title: message
        })
    }
    else if (status === "failed") {
        Toast.fire({
            icon: 'error',
            title: message
        })
    } else if (status === "warning") {
        Toast.fire({
            icon: 'warning',
            title: message
        })
    }
}
