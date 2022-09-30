// Data Table

$(document).ready(function () {
  $(".devs_table").DataTable();
});

// Image Preview
const uploade_preview = document.querySelector("#uploade_preview");

if (uploade_preview) {
  const devs_upload = document.querySelector("#photoUpload");
  devs_upload.onchange = (e) => {
    const devsPhoto = URL.createObjectURL(e.target.files[0]);

    uploade_preview.setAttribute("src", devsPhoto);
  };
}

//  Remove developer data

const remove_devs = document.querySelectorAll(".remove_devs");

if (remove_devs) {
  remove_devs.forEach((item) => {
    item.onclick = () => {
      const remove_confirm = confirm(" Are You Remove Data ??")

      if (remove_confirm) {
        return true

      } else {
        return false
      }

    };
  });
}