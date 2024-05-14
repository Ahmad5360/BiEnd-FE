"use client";

import React, { useEffect, useState } from "react";
import { DatabaseX } from "react-bootstrap-icons";
import Dropdown from "./common/dropdown";
import Pagination from "./common/pagination";
import { toast } from "react-toastify";
import { getData } from "../apis";

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [pageCache, setPageCache] = useState({});
  const [pageNo, setPageNo] = useState(1);
  const [total, setTotal] = useState();
  const [response, setResponse] = useState();

  const data = [
    {
      id: 1,
      Company: "Apple",
      Job_Title: "Software Engineer Intern",
      year: "2021",
      salary: "200k",
      generder: "male",
      ethnicity: "white",
      records: "100",
    },
    {
      id: 2,
      Company: "Apple",
      Job_Title: "Software Engineer Intern",
      year: "2021",
      salary: "200k",
      generder: "male",
      ethnicity: "white",
      records: "100",
    },
    {
      id: 3,
      Company: "Apple",
      Job_Title: "Software Engineer Intern",
      year: "2021",
      salary: "200k",
      generder: "male",
      ethnicity: "white",
      records: "100",
    },
    {
      id: 4,
      Company: "Apple",
      Job_Title: "Software Engineer Intern",
      year: "2021",
      salary: "200k",
      generder: "male",
      ethnicity: "white",
      records: "100",
    },
    {
      id: 5,
      Company: "Apple",
      Job_Title: "Software Engineer Intern",
      year: "2021",
      salary: "200k",
      generder: "male",
      ethnicity: "white",
      records: "100",
    },
    {
      id: 6,
      Company: "Apple",
      Job_Title: "Software Engineer Intern",
      year: "2021",
      salary: "200k",
      generder: "male",
      ethnicity: "white",
      records: "100",
    },
    {
      id: 7,
      Company: "Apple",
      Job_Title: "Software Engineer Intern",
      year: "2021",
      salary: "200k",
      generder: "male",
      ethnicity: "white",
      records: "100",
    },
    {
      id: 8,
      Company: "Apple",
      Job_Title: "Software Engineer Intern",
      year: "2021",
      salary: "200k",
      generder: "male",
      ethnicity: "white",
      records: "100",
    },
    {
      id: 9,
      Company: "Apple",
      Job_Title: "Software Engineer Intern",
      year: "2021",
      salary: "200k",
      generder: "male",
      ethnicity: "white",
      records: "100",
    },
    {
      id: 10,
      Company: "Apple",
      Job_Title: "Software Engineer Intern",
      year: "2021",
      salary: "200k",
      generder: "male",
      ethnicity: "white",
      records: "100",
    },
    {
      id: 11,
      Company: "Apple",
      Job_Title: "Software Engineer Intern",
      year: "2021",
      salary: "200k",
      generder: "male",
      ethnicity: "white",
      records: "100",
    },
    {
      id: 12,
      Company: "Apple",
      Job_Title: "Software Engineer Intern",
      year: "2021",
      salary: "200k",
      generder: "male",
      ethnicity: "white",
      records: "100",
    },
    {
      id: 13,
      Company: "Apple",
      Job_Title: "Software Engineer Intern",
      year: "2021",
      salary: "200k",
      generder: "male",
      ethnicity: "white",
      records: "100",
    },
    {
      id: 14,
      Company: "Apple",
      Job_Title: "Software Engineer Intern",
      year: "2021",
      salary: "200k",
      generder: "male",
      ethnicity: "white",
      records: "100",
    },
    {
      id: 15,
      Company: "Apple",
      Job_Title: "Software Engineer Intern",
      year: "2021",
      salary: "200k",
      generder: "male",
      ethnicity: "white",
      records: "100",
    },
  ];
  const ethnicity = [
    {
      value: "asina",
      label: "Asian",
    },
    {
      value: "hispanic",
      label: "Hispanic",
    },
    {
      value: "black",
      label: "Black",
    },
    {
      value: "multiple",
      label: "Multiple",
    },
    {
      value: "native",
      label: "Native",
    },
    {
      value: "white",
      label: "White",
    },
  ];
  const genders = [
    {
      value: "male",
      label: "Male",
    },
    {
      value: "female",
      label: "Female",
    },
  ];
  const years = [
    {
      value: "2016",
      label: "2016",
    },
    {
      value: "2017",
      label: "2017",
    },
    {
      value: "2018",
      label: "2018",
    },
    {
      value: "2019",
      label: "2019",
    },
    {
      value: "2020",
      label: "2020",
    },
    {
      value: "2021",
      label: "2021",
    },
    {
      value: "2022",
      label: "2022",
    },
  ];
  const countries = [
    {
      value: "USA",
      label: "United States",
    },
    {
      value: "UK",
      label: "United Kingdom",
    },
    {
      value: "CAN",
      label: "Canada",
    },
    {
      value: "AUS",
      label: "Australia",
    },
    {
      value: "GER",
      label: "Germany",
    },
    {
      value: "FRA",
      label: "France",
    },
    {
      value: "JPN",
      label: "Japan",
    },
    {
      value: "IND",
      label: "India",
    },
    {
      value: "ITA",
      label: "Italy",
    },
    {
      value: "BRA",
      label: "Brazil",
    },
  ];

  const handleRefetch = async () => {
    if (pageCache[pageNo]) {
      const { cachedResponse, cachedTotal } = pageCache[pageNo];
      setResponse(cachedResponse);
      setTotal(cachedTotal);
    } else {
      setLoading(true);
      try {
        const res = await getData(pageNo);
        const newData = res.data.data.data;
        const newTotal = res.data.data.total;
        console.log(newData);
        setPageCache((prevCache) => ({
          ...prevCache,
          [pageNo]: { cachedResponse: newData, cachedTotal: newTotal },
        }));
        setResponse(newData);
        setTotal(newTotal);
      } catch (err) {
        toast.error(err.response.data.error);
      } finally {
        setLoading(false);
      }
    }

    // [pageNo, pageCache]);
  };

  useEffect(() => {
    setLoading(true);
    handleRefetch();
    // getData(pageNo)
    //   .then((response) => {
    //     console.log(response.data.data);
    //     setResponse(response.data.data.data)
    //     // setFilesList(response.data.files);
    //     // setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     // toast.error(error.response.data.message);
    //     // setLoading(false);
    //     // setResponse(null);
    //   });
  }, []);

  return (
    <div>
      <div
        className={`flex justify-end pr-3.5 gap-4 w-full ${
          response && response.length > 0 ? "" : "pointer-events-none"
        }`}
      >
        <div className="w-32">
          <Dropdown
            options={years}
            placeholder="Year"
            onChange={(option) => console.log(option)}
          />
        </div>
        <div className="w-32">
          <Dropdown
            placeholder="Ethncity"
            options={ethnicity}
            onChange={(option) => console.log(option)}
          />
        </div>
        <div className="w-32">
          <Dropdown
            options={genders}
            placeholder="Gender"
            onChange={(option) => console.log(option)}
          />
        </div>
        <div className="w-32">
          <Dropdown
            options={countries}
            placeholder="Country"
            onChange={(option) => console.log(option)}
          />
        </div>
      </div>
      <>
        <div className="overflow-x-auto">
          <div className="overflow-x-auto w-full table-wrp block max-h-[550px] min-h-[550px] ">
            <table className="w-full bg-white border border-solid border-gray-300 mb-4 ">
              <thead className="bg-slate-800 border-b border-solid border-gray-300 sticky top-0">
                <tr className=" text-white">
                  {/* <th className="border-r h-full font-semibold border-solid border-gray-300 p-3 md:text-base text-sm">
                  Sr. no
                </th> */}
                  <th className="border-r h-full font-semibold border-solid border-gray-300 p-3 md:text-base text-sm">
                    Company Name
                  </th>
                  <th className="border-r h-full font-semibold border-solid border-gray-300 p-3 md:text-base text-sm">
                    Job Title
                  </th>
                  <th className="border-r h-full font-semibold border-solid border-gray-300 p-3 md:text-base text-sm">
                    Year
                  </th>
                  <th className="border-r h-full font-semibold border-solid border-gray-300 p-3 md:text-base text-sm">
                    Salary
                  </th>
                  <th className="border-r h-full font-semibold border-solid border-gray-300 p-3 md:text-base text-sm">
                    Gender
                  </th>
                  <th className="border-r h-full font-semibold border-solid border-gray-300 p-3 md:text-base text-sm">
                    Ethnicity
                  </th>
                  {/* <th className="border-r h-full font-semibold border-solid border-gray-300 p-3 md:text-base text-sm">
                  Total Results
                </th> */}
                </tr>
              </thead>

              {!loading ? (
                <>
                  {response && response.length > 0 ? (
                    <tbody className="h-[550px] overflow-y-auto">
                      {response &&
                        response.map((data, index) => (
                          <tr
                            key={index}
                            className={`${"border border-b border-gray-300"}`}
                          >
                            {/* <td className=" border-r h-full border-solid border-gray-300 text-center p-3 md:text-base text-sm">
                            {data.id}{" "}
                          </td> */}
                            <td className="border-r h-full border-solid border-gray-300 text-center p-3 md:text-base text-sm">
                              {data.company}{" "}
                            </td>
                            <td className="border-r h-full border-solid border-gray-300 text-center p-3 md:text-base text-sm">
                              {data.job_category}{" "}
                            </td>
                            <td className="border-r h-full border-solid border-gray-300 text-center p-3 md:text-base text-sm">
                              {data.year}{" "}
                            </td>
                            <td className="border-r h-full border-solid border-gray-300 text-center p-3 md:text-base text-sm">
                              {data.salary}{" "}
                            </td>
                            <td className="border-r h-full border-solid border-gray-300 text-center p-3 md:text-base text-sm">
                              {data.gender}{" "}
                            </td>
                            <td className="border-r h-full border-solid border-gray-300 text-center p-3 md:text-base text-sm">
                              {data.ethnicity}{" "}
                            </td>
                            {/* <td className="border-r h-full border-solid border-gray-300 text-center p-3 md:text-base text-sm">
                            {data.records}{" "}
                          </td> */}
                          </tr>
                        ))}
                    </tbody>
                  ) : (
                    <tbody>
                      <tr>
                        <td colSpan="6" className="text-center py-6">
                          <p className="text-gray-500 text-xl md:text-2xl flex items-center justify-center gap-2">
                            <span>
                              <DatabaseX />
                            </span>
                            No Data Found
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  )}
                </>
              ) : (
                <tbody>
                  <tr>
                    <td colSpan="6" className="text-center py-6">
                      <p className="text-gray-500 text-xl md:text-2xl flex items-center justify-center gap-2">
                        Loading...
                      </p>
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        </div>
        {response && response.length > 0 && (
          <div className="my-4">
            <Pagination
              total={total}
              pageNo={pageNo}
              setPageNo={setPageNo}
              handlePageChange={handleRefetch}
            />
          </div>
        )}
      </>
    </div>
  );
}

export default HomePage;
