export default {
  methods: {
    optimizeNumber(number) {
      const tempNumber = Number(number);
      if (tempNumber > 1000000000000) {
        const pointIndex = number.indexOf(".");
        const trillions = Number(number.slice(0, pointIndex - 9)) / 1000;
        return `${trillions.toFixed(1)}t`;
      }

      if (tempNumber > 1000000000) {
        const pointIndex = number.indexOf(".");
        const billions = Number(number.slice(0, pointIndex - 6)) / 1000;
        return `${billions.toFixed(1)}b`;
      }

      if (tempNumber > 1000000) {
        const pointIndex = number.indexOf(".");
        const millions = Number(number.slice(0, pointIndex - 3)) / 1000;
        return `${millions.toFixed(1)}m`;
      }
      if (tempNumber > 1000) {
        const pointIndex = number.indexOf(".");
        const millions = Number(number.slice(0, pointIndex + 4));
        return `${millions.toFixed(3)}`;
      }

      if (tempNumber > 1) {
        return tempNumber.toFixed(3);
      }

      if(tempNumber < 0) {
          return tempNumber.toFixed(2);
      }

      if(!Number.isInteger(tempNumber)) {
          return tempNumber.toFixed(2);
      }

      return tempNumber.toFixed(9);
    },
  },
};
