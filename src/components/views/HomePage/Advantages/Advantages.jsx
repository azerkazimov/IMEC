import { TbTruckDelivery } from "react-icons/tb";
import SectionHeader from "../../../layout/SectionHeader/SectionHeader";
import { MdEngineering } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";

function ChooseUs() {
  return (
    <section className="advantage">
      <div className="container">
        <div className="row text-center">
          <SectionHeader
            span="our advantages"
            head="Why choose us"
            textPosition="center"
          />
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 mb-5">
            <div className="advantage-item">
              <div className="advantage-item-icon">
                <TbTruckDelivery />
              </div>
              <p>Fast Delivery</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-5">
            <div className="advantage-item">
              <div className="advantage-item-icon">
              <MdEngineering />
              </div>
              <p>Engineer Solution</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-5">
            <div className="advantage-item">
              <div className="advantage-item-icon">
              <IoSearchSharp />
              </div>
              <p>Quick Find </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-5">
            <div className="advantage-item">
              <div className="advantage-item-icon">
              <MdEngineering />
              </div>
              <p>Engineer Solution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
