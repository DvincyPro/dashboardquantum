/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./index.css";
import { registerLicense } from "@syncfusion/ej2-base";
import {ContexProvider} from './contexts/ContextProvider';

registerLicense(
  "SYNCFUSION_LICENSE=MjMzNjc4N0AzMjMxMmUzMDJlMzBGa3cvNWlWMzFGYlFGS285TGpxcGt1SzZjbHEwZnUyN2N6a1VyYlFpdlA4PQ==;Mgo+DSMBaFt+QHJqVk1mQ1BHaV1CX2BZeVl3TGlceE4QCV5EYF5SRHBfRFxqSHdWcUZqUH0=;Mgo+DSMBMAY9C3t2VFhiQlJPcEBDXnxLflF1VWRTfld6cVJWACFaRnZdQV1lSXhSf0RqXHhacXBd;Mgo+DSMBPh8sVXJ1S0R+X1pCaV5BQmFJfFBmQmlYdlR1c0UmHVdTRHRcQltjT39ad0xmXntdcXw=;MjMzNjc5MUAzMjMxMmUzMDJlMzBhdkFKc0UyTWJSd29FNUNvYmxsS08yLzlXbVZSdllqOGo1Mnc1bXhEejBFPQ==;NRAiBiAaIQQuGjN/V0d+Xk9HfVldXGBWfFN0RnNedV95flBBcDwsT3RfQF5jT35Vd0xiUHpZdHNUTg==;ORg4AjUWIQA/Gnt2VFhiQlJPcEBDXnxLflF1VWRTfld6cVJWACFaRnZdQV1lSXhSf0RqXHhaeHJd;MjMzNjc5NEAzMjMxMmUzMDJlMzBNSmdXQm82Y2NmWDROT3Z5VGd5WWc4THNiT1BrMktGS0dlTnp6amNTQ2NnPQ==;MjMzNjc5NUAzMjMxMmUzMDJlMzBPU1RPemFmemtkMmZ4bExNQW04OEZVMll3b2VYZjRkTC9YMmdoUnI5MW53PQ==;MjMzNjc5NkAzMjMxMmUzMDJlMzBndFBycTNBQU51TVVHYzJBc1VXS1pmTzQxVVBWL045VVBuUjVBai9ReFVVPQ==;MjMzNjc5N0AzMjMxMmUzMDJlMzBTVkR5b2tWMXVUcHlVRkl0KytqSU9zUng5ZTlvcTk0dGRkTW54K3NrdmJnPQ==;MjMzNjc5OEAzMjMxMmUzMDJlMzBGa3cvNWlWMzFGYlFGS285TGpxcGt1SzZjbHEwZnUyN2N6a1VyYlFpdlA4PQ=="
);

const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <ContexProvider>
      <App />
    </ContexProvider>
  );
