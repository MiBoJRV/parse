document.addEventListener("DOMContentLoaded", function onDOMContentLoaded() {
  const defaultCountryCode = "DE";
  const allowedCountryCodes = [];
  checkIP()
    .then((result) => {
      setupHiddenInputs(result.ip, result.country_code, result.city);
      return result;
    })
    .then((result) => {
      let countryCode = result.country_code;

      if (allowedCountryCodes.length > 0) {
        countryCode = allowedCountryCodes.includes(result.country_code)
          ? result.country_code
          : defaultCountryCode;
      }

      setupTelInputs(countryCode, allowedCountryCodes);
    })
    .catch(function (err) {
      console.log("Error:", err);
      setupTelInputs(defaultCountryCode, allowedCountryCodes);
    })
    .finally(setupFormHandler());
});

async function checkIP() {
  return fetch("https://get.geojs.io/v1/ip/geo.json").then((response) =>
    response.json()
  );
}

function setupHiddenInputs(ip, countryCode, cityName) {
  $('input[name="ip"]').val(ip);
  $('input[name="country"]').val(countryCode);
  $('input[name="geo"]').val(countryCode);
  $('input[name="city"]').val(cityName);
}

// function setupTelInputs(countryCode, allowedCountryCodes) {
//   const $itiInstance = $("[type=tel]").intlTelInput({
//     utilsScript:
//       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.17/js/utils.min.js",
//     autoPlaceholder: "aggressive",
//     formatOnDisplay: true,
//     nationalMode: true,
//     separateDialCode: true,
//     initialCountry: countryCode,
//     onlyCountries: allowedCountryCodes,
//     allowDropdown: true,
//     //hiddenInput: "phone",
//   });

//   $itiInstance.on("keyup", function () {
//     if (isPhoneValid($(this))) hideErrors($(this));
//   });

//   $itiInstance.on("blur", function () {
//     if (!isPhoneValid($(this))) showErrors($(this));
//   });
// }

// function isPhoneValid($itiElement) {
//   return $itiElement.intlTelInput("isValidNumber");
// }

// function hideErrors($itiElement) {
//   $itiElement
//     .closest("form")
//     .find(".phone-errors")
//     .removeClass("phone-errors__active");
// }

// function showErrors($itiElement) {
//   const errorMap = [
// "Wrong number",
//          "Invalid country code",
//          "short number",
//          "Too long number",
//          "Wrong number",
//          "Invalid length",
//   ];

//   const errorCode = $itiElement.intlTelInput("getValidationError");
//   const placeholder = $itiElement.attr("placeholder");
//   const errorText = errorMap[errorCode] || errorMap[0];

//   $itiElement
//     .closest("form")
//     .find(".phone-errors")
//     .html(errorText + "<br>Example phone: <br>  " + placeholder)
//     .addClass("phone-errors__active");
// }

// function setupPhoneSubHiddenInput($itiElement) {
//   const intlNumber = $itiElement.intlTelInput("getNumber");
//   //$('input[name="phonesub"]').val(intlNumber.replace(/[^0-9]/, ""));
//   $('input[name="phonesub"]').val(intlNumber);
//   //console.log(intlNumber);
//   //console.log($('input[name="phonesub"]').val());
// }

function blockFormSubmitButton($formElement) {
  $formElement.find("button").attr("disabled", true);
}

function setupFormHandler() {
  $("form").submit(function () {
    const $itiElement = $(this).find("[name=phone]");

    if (!isPhoneValid($itiElement)) return false;

    setupPhoneSubHiddenInput($itiElement);

    blockFormSubmitButton($(this));
    $("#pageloader").fadeIn();
    $(this).find('button').attr('disabled', true);
  });
}
