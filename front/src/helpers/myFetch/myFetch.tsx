import { apiUrl } from "../../config";

export const myFetch = (endpointUrl: string, requestOptions: any) => {
    return new Promise((resolve, reject) => {
        if (typeof requestOptions.body === "object") {
            requestOptions.body = JSON.stringify(requestOptions.body);
        }
        requestOptions.headers = {
            "Content-Type": "application/json"
        };

        fetch(`${apiUrl}${endpointUrl}`, requestOptions)
            .then((res: any) => {
                if (res.status === 200) {
                    res
                        .json()
                        .then((res: any) => {
                            resolve(res);
                        })
                        .catch((err: any) => {
                            reject(err);
                        });
                }
            });
    }).catch(err => {
        console.error(err);
    });
}
