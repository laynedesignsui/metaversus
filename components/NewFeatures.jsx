//? used to create feature sections. It includes an icon, title, and is intended for displaying and describing new features or content

//! STYLE IMPORT
import styles from "../styles";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:maw-w-[250px]min-w-[210px[">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
    >
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h1 className="mt-[20px] font-bold text-[24px] leading-[30px] text-white">
      {title}
    </h1>
    <p className="flex-1 mt-[20px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
