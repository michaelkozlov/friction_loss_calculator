const select = document.querySelector(".select_hose");
const flow_rate = document.querySelector(".flow_rate");
const hose_length = document.querySelector(".hose_length");
const total_friction_loss = document.querySelector(".total_friction_loss");
const friction_loss = document.querySelector(".friction_loss");

const calculate = () => {
  if (flow_rate.value && hose_length.value) {
    const total_friction_loss_value =
      Number(select.value) *
      Math.pow(flow_rate.value / 100, 2) *
      (hose_length.value / 100);

    const friction_loss_value =
      (total_friction_loss_value / hose_length.value) * 50;

    total_friction_loss.innerHTML =
      Math.round(total_friction_loss_value * 10) / 10;
    friction_loss.innerHTML = isNaN(friction_loss_value)
      ? 0
      : Math.round(friction_loss_value * 10) / 10;
  } else {
    total_friction_loss.innerHTML = "";
    friction_loss.innerHTML = "";
  }
};

select.addEventListener("change", calculate);
flow_rate.addEventListener("change", calculate);
hose_length.addEventListener("change", calculate);
