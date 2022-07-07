const swalAlert = (mensaje, bgColor) => {
  Swal.fire({
    title: "Consultar stock antes de comprar cualquier KIT",
    icon: "warning",
    confirmButtonText: "OK",
    background: bgColor || "#193028",
    color: "white",
  });
};

swalAlert();


