import { Link, Head, usePage } from "@inertiajs/react";

export default function Test(props) {
    return (
        <div className=" justify-center item-center">
            <Head title="mang eak" />
            <div className="bg-red-200 min-h-screen">
                {props.user
                    ? props.user.map((data, i) => {
                          return (
                              <div className="bg-yellow-700" key={i}>
                                  <p>{data.name}</p>
                                  <p>{data.email}</p>
                              </div>
                          );
                      })
                    : "GAK ADA WACANA DEK"}
            </div>
        </div>
    );
}
