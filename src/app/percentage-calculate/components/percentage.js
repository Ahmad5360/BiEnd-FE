"use client";

import React, { useEffect, useState } from "react";
import { DatabaseX } from "react-bootstrap-icons";
import Dropdown from "../../components/common/dropdown";
import Pagination from "../../components/common/pagination";
import { toast } from "react-toastify";
import { getData } from "../../apis";
import numeral from "numeral";

const Percentage = () => {
  const [loading, setLoading] = useState(false);
  const [pageCache, setPageCache] = useState({});
  const [pageNo, setPageNo] = useState(1);
  const [total, setTotal] = useState(null);
  const [response, setResponse] = useState({});
  const [query, setquery] = useState({});
  const [percent, setPercent] = useState();

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
      value: "asian",
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
        let newQuery;
        if (Object.keys(query).length > 0) {
          newQuery = Object.fromEntries(
            Object.entries(query).filter(([key, value]) => value !== null)
          );
        }
        const res = await getData(pageNo, newQuery);
        const newData = res.data.data.data;
        const newTotal = res.data.data.total;
        // console.log(newData);
        setResponse(newData);
        setTotal(newTotal);
        setPageCache((prevCache) => ({
          ...prevCache,
          [pageNo]: { cachedResponse: newData, cachedTotal: newTotal },
        }));
        setPercent(res.data.data.percentage);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        toast.error(err.response.data.error);
      } 
    //   finally {
    //     setLoading(false);
    //   }
    }

    // [pageNo, pageCache]);
  };

  //   console.log(response);
  // console.log(loading);

  useEffect(() => {
    handleRefetch();
  }, [pageNo, query]);

  return (
    <div>
      <div>
        <div
          className={`grid grid-cols-3 md:flex md:justify-end md:pr-3.5  gap-x-4 md:gap-4 w-full ${
            response && response.length > 0 ? "" : "pointer-events-none"
          }`}
        >
          <div className="w-26 md:w-32">
            <Dropdown
              options={years}
              placeholder="Year"
              onChange={(option) => {
                setPageCache({});
                setPageNo(1);
                setResponse({});
                setPercent(null);
                setTotal(null);
                if (option) {
                  setquery({ ...query, year: option.value });
                } else setquery({ ...query, year: null });
              }}
            />
          </div>
          <div className="w-26 md:w-32">
            <Dropdown
              placeholder="Ethncity"
              options={ethnicity}
              onChange={(option) => {
                setPageCache({});
                setPageNo(1);
                setResponse({});
                setPercent(null);
                setTotal(null);
                if (option) {
                  setquery({ ...query, ethnicityP: option.value });
                } else setquery({ ...query, ethnicityP: null });
              }}
            />
          </div>
          {/* <div className="w-26 md:w-32">
            <Dropdown
              options={genders}
              placeholder="Gender"
              onChange={(option) => {
                setPageCache({});
                setPageNo(1);
                setResponse({});
                setTotal(null);
                if (option) {
                  setquery({ ...query, gender: option.value });
                } else setquery({ ...query, gender: null });
              }}
            />
          </div> */}
          {/* <div className="w-26 md:w-32">
          <Dropdown
            options={countries}
            placeholder="Country"
            onChange={(option) => {
              console.log(option);
              // setPageCache({});
              // setPageNo(1);
              // setResponse({});
              // setTotal(null);
              // if (option) {
              //   setquery({
              //     country: option.value,
              //   });
              // } else setquery({ ...query, country: null });
            }}
          />
        </div> */}
        </div>
        <>
          <div className="overflow-x-auto">
            <div className="overflow-x-auto w-full table-wrp block max-h-[550px] min-h-[550px] ">
              <p className="pb-4">
                Percentage of employees in selected year is :{" "}
                <span className="ml-1 font-semibold">
                  {!percent && loading
                    ? "Calculating..."
                    : percent === "None"
                    ? "Select Year and Ethnicity"
                    : percent}
                </span>
              </p>
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
                                ${numeral(data.salary).format("0,0")}{" "}
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
          {!loading && response && response.length > 0 && (
            <div>
              <Pagination total={total} pageNo={pageNo} setPageNo={setPageNo} />
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default Percentage;
