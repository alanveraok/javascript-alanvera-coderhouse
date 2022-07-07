const compraRealizada = (mensaje, bgColor) => {
  Swal.fire({
    title: "COMPRA REALIZADA",
    icon: "success",
    confirmButtonText: "OK",
    background: bgColor || "#193028",
    color: "white",
  });
};
