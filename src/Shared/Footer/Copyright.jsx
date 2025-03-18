import moment from "moment";

const Copyright = () => {
  const year = moment().format("YYYY");
  return (
    <footer className="bg-white py-4 px-4 lg:px-0 w-full mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between text-center text-gray-600">
        <p>
          &copy; {year} All rights reserved by Wb Softwares. | Designed &
          Developed by Dhrubo Joyti Das.
        </p>
        <p className="mt-2 lg:mt-0">Sitemap | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Copyright;
