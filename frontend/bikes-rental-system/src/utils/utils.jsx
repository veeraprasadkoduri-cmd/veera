export const formatDate = (date) => {
  let day, month, year;
  let objDate = new Date(date);
  day = objDate.getDate();
  month = objDate.getMonth() + 1;
  year = objDate.getFullYear();
  const newDate = `${day}.${month}.${year}`;
  return month < 10 ? `${day}.0${month}.${year}` : newDate;
};

export const formatTime = (date) => {
  const formatTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });

  return formatTime;
};

export const transformBikes = (bikes) => {
  const newBike = bikes.map((bike) => {
    return {
      id: bike.id,
      bike_type: bike.bike_type.description,
      register_date: formatDate(bike.register_date)
    };
  });

  return newBike;
};

export const transformInvoices = (invoice) => {
  const transformedInvoices = invoice.map((invoice) => {
    return {
      id: invoice.id,
      gross_amount: `${invoice.gross_amount}$`,
      vat: `${invoice.vat}%`,
      net_amount: `${invoice.net_amount}$`,
      paid: invoice.paid ? "YES" : "NO"
    };
  });
  return transformedInvoices;
};
