

export const registrationFetch = (data) => {
  console.log(data, "asyncReg перед");
  return () => {
    fetch("/registration", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) =>
        data.text === "true" ?  window.location.assign("/login") : alert('Введите корректные данные')
      );
  };
};

