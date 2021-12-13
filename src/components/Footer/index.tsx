import React from "react";
import "./styles.scss";

export interface IFooter {}

const Footer: React.FunctionComponent<IFooter> = ({}) => {
  return (
    <footer className="footer bg-black text-light">
      <div className="container d-flex">
        <div className="socials d-flex">
          <svg
            className="fb"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 10.0001C20 4.47729 15.5229 0.000144958 10 0.000144958C4.47715 0.000144958 0 4.47729 0 10.0001C0 14.9914 3.65686 19.1285 8.4375 19.8787V12.8908H5.89844V10.0001H8.4375V7.79702C8.4375 5.29077 9.93043 3.90639 12.2146 3.90639C13.3087 3.90639 14.4531 4.10171 14.4531 4.10171V6.56264H13.1921C11.9499 6.56264 11.5625 7.33348 11.5625 8.1243V10.0001H14.3359L13.8926 12.8908H11.5625V19.8787C16.3431 19.1285 20 14.9914 20 10.0001Z"
              fill="white"
            />
            <path
              className="fb-dark"
              d="M13.8926 12.8906L14.3359 10H11.5625V8.12416C11.5625 7.33334 11.9499 6.5625 13.1921 6.5625H14.4531V4.10156C14.4531 4.10156 13.3087 3.90625 12.2146 3.90625C9.93043 3.90625 8.4375 5.29062 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C8.94662 19.9584 9.46844 20 10 20C10.5316 20 11.0534 19.9584 11.5625 19.8785V12.8906H13.8926Z"
              fill="#111100"
            />
          </svg>

          <svg
            className="insta"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0005 2C9.28478 2 8.94395 2.01188 7.87732 2.06042C6.81277 2.10917 6.08612 2.27771 5.45031 2.525C4.79262 2.78042 4.23472 3.12208 3.67891 3.67813C3.12267 4.23396 2.78102 4.79187 2.52478 5.44937C2.27687 6.08542 2.10812 6.81229 2.06021 7.87646C2.0125 8.94312 2 9.28417 2 12C2 14.7158 2.01208 15.0556 2.06042 16.1223C2.10937 17.1869 2.27791 17.9135 2.52498 18.5494C2.7806 19.2071 3.12226 19.765 3.67828 20.3208C4.23389 20.8771 4.79179 21.2196 5.44906 21.475C6.08529 21.7223 6.81214 21.8908 7.87649 21.9396C8.94312 21.9881 9.28373 22 11.9993 22C14.7152 22 15.055 21.9881 16.1217 21.9396C17.1862 21.8908 17.9137 21.7223 18.5499 21.475C19.2074 21.2196 19.7645 20.8771 20.3201 20.3208C20.8763 19.765 21.218 19.2071 21.4742 18.5496C21.72 17.9135 21.8888 17.1867 21.9388 16.1225C21.9867 15.0558 21.9992 14.7158 21.9992 12C21.9992 9.28417 21.9867 8.94333 21.9388 7.87667C21.8888 6.81208 21.72 6.08542 21.4742 5.44958C21.218 4.79187 20.8763 4.23396 20.3201 3.67813C19.7638 3.12188 19.2076 2.78021 18.5493 2.525C17.9118 2.27771 17.1847 2.10917 16.1202 2.06042C15.0536 2.01188 14.714 2 11.9974 2H12.0005ZM11.1035 3.80208C11.3697 3.80167 11.6668 3.80208 12.0005 3.80208C14.6704 3.80208 14.9869 3.81167 16.0412 3.85958C17.0162 3.90417 17.5454 4.06708 17.8978 4.20396C18.3645 4.38521 18.6972 4.60187 19.047 4.95187C19.397 5.30187 19.6136 5.63521 19.7953 6.10187C19.9322 6.45396 20.0953 6.98312 20.1397 7.95812C20.1876 9.01229 20.198 9.32896 20.198 11.9977C20.198 14.6665 20.1876 14.9831 20.1397 16.0373C20.0951 17.0123 19.9322 17.5415 19.7953 17.8935C19.614 18.3602 19.397 18.6925 19.047 19.0423C18.697 19.3923 18.3647 19.609 17.8978 19.7902C17.5458 19.9277 17.0162 20.0902 16.0412 20.1348C14.9871 20.1827 14.6704 20.1931 12.0005 20.1931C9.3304 20.1931 9.01395 20.1827 7.95982 20.1348C6.98485 20.0898 6.4557 19.9269 6.103 19.79C5.63635 19.6087 5.30302 19.3921 4.95303 19.0421C4.60304 18.6921 4.38638 18.3596 4.20472 17.8927C4.06785 17.5406 3.90473 17.0115 3.86036 16.0365C3.81244 14.9823 3.80286 14.6656 3.80286 11.9952C3.80286 9.32479 3.81244 9.00979 3.86036 7.95563C3.90494 6.98063 4.06785 6.45146 4.20472 6.09896C4.38597 5.63229 4.60304 5.29896 4.95303 4.94896C5.30302 4.59896 5.63635 4.38229 6.103 4.20062C6.45549 4.06312 6.98485 3.90063 7.95982 3.85583C8.88229 3.81417 9.23978 3.80167 11.1035 3.79958V3.80208ZM17.3383 5.4625C16.6758 5.4625 16.1383 5.99937 16.1383 6.66208C16.1383 7.32458 16.6758 7.86208 17.3383 7.86208C18.0008 7.86208 18.5382 7.32458 18.5382 6.66208C18.5382 5.99958 18.0008 5.46208 17.3383 5.46208V5.4625ZM12.0005 6.86458C9.16457 6.86458 6.86527 9.16396 6.86527 12C6.86527 14.836 9.16457 17.1344 12.0005 17.1344C14.8365 17.1344 17.135 14.836 17.135 12C17.135 9.16396 14.8363 6.86458 12.0003 6.86458H12.0005ZM12.0005 8.66667C13.8413 8.66667 15.3338 10.159 15.3338 12C15.3338 13.8408 13.8413 15.3333 12.0005 15.3333C10.1595 15.3333 8.6673 13.8408 8.6673 12C8.6673 10.159 10.1595 8.66667 12.0005 8.66667Z"
              fill="white"
            />
          </svg>

          <svg
            className="twitter"
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.54771 19.745C16.6048 19.745 21.5577 12.2474 21.5577 5.74585C21.5577 5.5329 21.5534 5.3209 21.5438 5.10987C22.5053 4.41537 23.3409 3.54869 24 2.56209C23.1177 2.95395 22.1683 3.21774 21.1723 3.33669C22.1889 2.72756 22.9694 1.764 23.3376 0.615326C22.3862 1.17889 21.3327 1.58849 20.2109 1.80963C19.3123 0.853285 18.0331 0.255127 16.6166 0.255127C13.8974 0.255127 11.6924 2.45856 11.6924 5.17461C11.6924 5.56071 11.7356 5.93626 11.82 6.29649C7.72761 6.09072 4.09875 4.13288 1.67011 1.15586C1.24724 1.88297 1.0034 2.72759 1.0034 3.6288C1.0034 5.3358 1.8727 6.84274 3.19462 7.72432C2.38676 7.69938 1.62787 7.47779 0.964581 7.10896C0.963856 7.1296 0.963854 7.14973 0.963854 7.17179C0.963854 9.5546 2.66115 11.5441 4.91422 11.9949C4.50046 12.1076 4.06513 12.168 3.61582 12.168C3.29902 12.168 2.99038 12.1369 2.69038 12.0793C3.31725 14.0342 5.13504 15.4568 7.29018 15.4966C5.60489 16.8165 3.48189 17.6026 1.17454 17.6026C0.777577 17.6026 0.38542 17.5801 0 17.5345C2.17922 18.9303 4.76684 19.7446 7.54798 19.7446"
              fill="white"
            />
          </svg>
        </div>

        <ul className="d-flex">
            <li className="title">
                COMPANY
            </li>
            <li>
                <a href="" className="opt">Careers</a>
            </li>
            <li>
                <a href="" className="opt">FAQ</a>
            </li>
            <li>
                <a href="" className="opt">Terms of service</a>
            </li>
            <li>
                <a href="" className="opt">Privacy policy</a>
            </li>
        </ul>

        <ul className="d-flex">
            <li className="title">
                CONTACT
            </li>
            <li>
                <p className="opt">support@prudent.ng</p>
            </li>
            <li>
                <p className="opt">+2348178656523</p>
            </li>

        </ul>

        <ul className="d-flex">
            <li className="title">
                ADDRESS
            </li>
            <li>
                <p className="opt">17, Rev Ogunbiyi,</p>
            </li>
            <li>
                <p className="opt">Ikeja, Lagos.</p>
            </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
