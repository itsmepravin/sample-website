import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 px-2 py-4">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2">Solutions</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
            <li className="py-1">Cloud</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">Tutorials</li>
            <li className="py-1">Cheatsheets</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2">Information</h6>
          <ul>
            <li className="py-1">Location</li>
            <li className="py-1">Privacy Terms</li>
            <li className="py-1">License</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2">About Us</h6>
          <ul>
            <li className="py-1">Blogs</li>
            <li className="py-1">Instructors</li>
            <li className="py-1">Talk to Us</li>
            <li className="py-1">FAQs</li>
          </ul>
        </div>

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, send to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Your E-mail Address"
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] mx-auto justify-between items-center md:flex-row text-center text-gray-500">
        <p className="mt-4">2022 MyWebsite, LLC. All rights reserved.</p>
        <div className="flex justify-between sm:max-w-[300px] pt-4 text-2xl gap-2">
          <FaFacebook />
          <FaGithub />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
        </div>
      </div>
    </div>
  );
};

export default Footer;
