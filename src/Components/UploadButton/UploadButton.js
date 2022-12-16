import './Upload.scss'; 
import Image from '../image/Image';
import { FileUploader } from "react-drag-drop-files";

const UploadButton = (props) => {
  return (
    <label htmlFor="file" className={`custom-upload ${props.variant}`}>
      <div className='file-user-upload'> 
        <div className='file-upload-btn'>Upload File</div>
        <FileUploader name="file" types={["JPG", "PNG", "SVG"]}/>    
      </div>
    </label>
  )
}
export default UploadButton;  
