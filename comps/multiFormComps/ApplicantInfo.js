import { useState } from "react"
const ApplicantInfo=({setFormName})=>{
   

    return(
        
        <div onLoad={ setFormName('Applicant info')}>
            
            <div className="form-holedr"> 
                 {/*========================  contact form row fname + lname=======================*/}
                        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full md:w-[48%]">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">First name *</p>
                                                <input 
                                                    type="text" 
                                                    className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-green" 
                                                    placeholder="Your first name" 
                                                    pattern="[a-zA-z ]{3,20}"
                                                    title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                    required>

                                                    </input>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name *</p>
                                         </div>
                                         <div className="form-col w-full md:w-[48%]">
                                                <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Last name *</p>
                                                <input  type="text"
                                                        className=" w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-red"
                                                        placeholder="Your last name"
                                                        pattern="[a-zA-z ]{3,20}"
                                                        title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                        required>

                                                     </input>
                                                     <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                         </div>
                        </div>
                {/*======================== contact form row fname + lname end=======================*/}
                {/*========================  contact form row email + phone=======================*/}
                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full md:w-[48%]">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">Email *</p>
                                                <input 
                                                    type="email" 
                                                    className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-green" 
                                                    placeholder="Your email" 
                                                    pattern="[a-zA-z ]{3,20}"
                                                    title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                    required>

                                                    </input>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">email *</p>
                                         </div>
                                         <div className="form-col w-full md:w-[48%]">
                                                <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Phone number *</p>
                                                <input  type="text"
                                                        className=" w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-red"
                                                        placeholder="Your phone number"
                                                        pattern="[a-zA-z ]{3,20}"
                                                        title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                        required>

                                                     </input>
                                                     <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">Phone *</p>
                                         </div>
                </div>
                {/*======================== contact form row email + phone end=======================*/}
                {/*========================  Street adress   + Street adress  2=======================*/}
                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full md:w-[48%]">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">Street address *</p>
                                                <input 
                                                    type="email" 
                                                    className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-green" 
                                                    placeholder="Address" 
                                                    pattern="[a-zA-z ]{3,20}"
                                                    title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                    required>

                                                    </input>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">email *</p>
                                         </div>
                                         <div className="form-col w-full md:w-[48%]">
                                                <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Street address 2</p>
                                                <input  type="text"
                                                        className=" w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-red"
                                                        placeholder="Address 2"
                                                        pattern="[a-zA-z ]{3,20}"
                                                        title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                        required>

                                                     </input>
                                                     <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">Phone *</p>
                                         </div>
                </div>
                {/*======================== Street adress   + Street adress  2 end=======================*/}
                {/*========================  city   + region =======================*/}
                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full md:w-[48%]">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">City *</p>
                                                <input 
                                                    type="email" 
                                                    className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-green" 
                                                    placeholder="Your city name" 
                                                    pattern="[a-zA-z ]{3,20}"
                                                    title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                    required>

                                                    </input>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">email *</p>
                                         </div>
                                         <div className="form-col w-full md:w-[48%]">
                                                <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">State / Province / Region*</p>
                                                <input  type="text"
                                                        className=" w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-red"
                                                        placeholder="State / Province / Region"
                                                        pattern="[a-zA-z ]{3,20}"
                                                        title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                        required>

                                                     </input>
                                                     <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">Phone *</p>
                                         </div>
                </div>
                {/*======================== contact form row city   + region end=======================*/}
                 {/*========================  city   + region =======================*/}
                 <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full md:w-[48%]">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">Zip *</p>
                                                <input 
                                                    type="email" 
                                                    className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-green" 
                                                    placeholder="Zip / Postal code" 
                                                    pattern="[a-zA-z ]{3,20}"
                                                    title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                    required>

                                                    </input>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">email *</p>
                                         </div>
                                         <div className="form-col w-full md:w-[48%]">
                                                <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Country *</p>
                                               
                                               <select type="text" className="w-full event-input text-gray-500  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-green"  required>
                                               <option value="United States">United States</option>

                                                
                                                    <option value="Afghanistan">Afghanistan</option>
                                                    <option value="Aland Islands">Åland Islands</option>
                                                    <option value="Albania">Albania</option>
                                                    <option value="Algeria">Algeria</option>
                                                    <option value="American Samoa">American Samoa</option>
                                                    <option value="Andorra">Andorra</option>
                                                    <option value="Angola">Angola</option>
                                                    <option value="Anguilla">Anguilla</option>
                                                    <option value="Antarctica">Antarctica</option>
                                                    <option value="Antigua and Barbuda">Antigua & Barbuda</option>
                                                    <option value="Argentina">Argentina</option>
                                                    <option value="Armenia">Armenia</option>
                                                    <option value="Aruba">Aruba</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="Austria">Austria</option>
                                                    <option value="Azerbaijan">Azerbaijan</option>
                                                    <option value="Bahamas">Bahamas</option>
                                                    <option value="Bahrain">Bahrain</option>
                                                    <option value="Bangladesh">Bangladesh</option>
                                                    <option value="Barbados">Barbados</option>
                                                    <option value="Belarus">Belarus</option>
                                                    <option value="Belgium">Belgium</option>
                                                    <option value="Belize">Belize</option>
                                                    <option value="Benin">Benin</option>
                                                    <option value="Bermuda">Bermuda</option>
                                                    <option value="Bhutan">Bhutan</option>
                                                    <option value="Bolivia">Bolivia</option>
                                                    <option value="Bonaire, Sint Eustatius and Saba">Caribbean Netherlands</option>
                                                    <option value="Bosnia and Herzegovina">Bosnia & Herzegovina</option>
                                                    <option value="Botswana">Botswana</option>
                                                    <option value="Bouvet Island">Bouvet Island</option>
                                                    <option value="Brazil">Brazil</option>
                                                    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                    <option value="Brunei Darussalam">Brunei</option>
                                                    <option value="Bulgaria">Bulgaria</option>
                                                    <option value="Burkina Faso">Burkina Faso</option>
                                                    <option value="Burundi">Burundi</option>
                                                    <option value="Cambodia">Cambodia</option>
                                                    <option value="Cameroon">Cameroon</option>
                                                    
                                                    <option value="Cape Verde">Cape Verde</option>
                                                    <option value="Cayman Islands">Cayman Islands</option>
                                                    <option value="Central African Republic">Central African Republic</option>
                                                    <option value="Chad">Chad</option>
                                                    <option value="Chile">Chile</option>
                                                    <option value="China">China</option>
                                                    <option value="Christmas Island">Christmas Island</option>
                                                    <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                                    <option value="Colombia">Colombia</option>
                                                    <option value="Comoros">Comoros</option>
                                                    <option value="Congo">Congo - Brazzaville</option>
                                                    <option value="Congo, Democratic Republic of the Congo">Congo - Kinshasa</option>
                                                    <option value="Cook Islands">Cook Islands</option>
                                                    <option value="Costa Rica">Costa Rica</option>
                                                    <option value="Cote D'Ivoire">Côte d’Ivoire</option>
                                                    <option value="Croatia">Croatia</option>
                                                    <option value="Cuba">Cuba</option>
                                                    <option value="Curacao">Curaçao</option>
                                                    <option value="Cyprus">Cyprus</option>
                                                    <option value="Czech Republic">Czechia</option>
                                                    <option value="Denmark">Denmark</option>
                                                    <option value="Djibouti">Djibouti</option>
                                                    <option value="Dominica">Dominica</option>
                                                    <option value="Dominican Republic">Dominican Republic</option>
                                                    <option value="Ecuador">Ecuador</option>
                                                    <option value="Egypt">Egypt</option>
                                                    <option value="El Salvador">El Salvador</option>
                                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                    <option value="Eritrea">Eritrea</option>
                                                    <option value="Estonia">Estonia</option>
                                                    <option value="Ethiopia">Ethiopia</option>
                                                    <option value="Falkland Islands (Malvinas)">Falkland Islands (Islas Malvinas)</option>
                                                    <option value="Faroe Islands">Faroe Islands</option>
                                                    <option value="Fiji">Fiji</option>
                                                    <option value="Finland">Finland</option>
                                                    <option value="France">France</option>
                                                    <option value="French Guiana">French Guiana</option>
                                                    <option value="French Polynesia">French Polynesia</option>
                                                    <option value="French Southern Territories">French Southern Territories</option>
                                                    <option value="Gabon">Gabon</option>
                                                    <option value="Gambia">Gambia</option>
                                                    <option value="Georgia">Georgia</option>
                                                    <option value="Germany">Germany</option>
                                                    <option value="Ghana">Ghana</option>
                                                    <option value="Gibraltar">Gibraltar</option>
                                                    <option value="Greece">Greece</option>
                                                    <option value="Greenland">Greenland</option>
                                                    <option value="Grenada">Grenada</option>
                                                    <option value="Guadeloupe">Guadeloupe</option>
                                                    <option value="Guam">Guam</option>
                                                    <option value="Guatemala">Guatemala</option>
                                                    <option value="Guernsey">Guernsey</option>
                                                    <option value="Guinea">Guinea</option>
                                                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                    <option value="Guyana">Guyana</option>
                                                    <option value="Haiti">Haiti</option>
                                                    <option value="Heard Island and Mcdonald Islands">Heard & McDonald Islands</option>
                                                    <option value="Holy See (Vatican City State)">Vatican City</option>
                                                    <option value="Honduras">Honduras</option>
                                                    <option value="Hong Kong">Hong Kong</option>
                                                    <option value="Hungary">Hungary</option>
                                                    <option value="Iceland">Iceland</option>
                                                    <option value="India">India</option>
                                                    <option value="Indonesia">Indonesia</option>
                                                    <option value="Iran, Islamic Republic of">Iran</option>
                                                    <option value="Iraq">Iraq</option>
                                                    <option value="Ireland">Ireland</option>
                                                    <option value="Isle of Man">Isle of Man</option>
                                                    <option value="Israel">Israel</option>
                                                    <option value="Italy">Italy</option>
                                                    <option value="Jamaica">Jamaica</option>
                                                    <option value="Japan">Japan</option>
                                                    <option value="Jersey">Jersey</option>
                                                    <option value="Jordan">Jordan</option>
                                                    <option value="Kazakhstan">Kazakhstan</option>
                                                    <option value="Kenya">Kenya</option>
                                                    <option value="Kiribati">Kiribati</option>
                                                    <option value="Korea, Democratic People's Republic of">North Korea</option>
                                                    <option value="Korea, Republic of">South Korea</option>
                                                    <option value="Kosovo">Kosovo</option>
                                                    <option value="Kuwait">Kuwait</option>
                                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                    <option value="Lao People's Democratic Republic">Laos</option>
                                                    <option value="Latvia">Latvia</option>
                                                    <option value="Lebanon">Lebanon</option>
                                                    <option value="Lesotho">Lesotho</option>
                                                    <option value="Liberia">Liberia</option>
                                                    <option value="Libyan Arab Jamahiriya">Libya</option>
                                                    <option value="Liechtenstein">Liechtenstein</option>
                                                    <option value="Lithuania">Lithuania</option>
                                                    <option value="Luxembourg">Luxembourg</option>
                                                    <option value="Macao">Macao</option>
                                                    <option value="Macedonia, the Former Yugoslav Republic of">North Macedonia</option>
                                                    <option value="Madagascar">Madagascar</option>
                                                    <option value="Malawi">Malawi</option>
                                                    <option value="Malaysia">Malaysia</option>
                                                    <option value="Maldives">Maldives</option>
                                                    <option value="Mali">Mali</option>
                                                    <option value="Malta">Malta</option>
                                                    <option value="Marshall Islands">Marshall Islands</option>
                                                    <option value="Martinique">Martinique</option>
                                                    <option value="Mauritania">Mauritania</option>
                                                    <option value="Mauritius">Mauritius</option>
                                                    <option value="Mayotte">Mayotte</option>
                                                    <option value="Mexico">Mexico</option>
                                                    <option value="Micronesia, Federated States of">Micronesia</option>
                                                    <option value="Moldova, Republic of">Moldova</option>
                                                    <option value="Monaco">Monaco</option>
                                                    <option value="Mongolia">Mongolia</option>
                                                    <option value="Montenegro">Montenegro</option>
                                                    <option value="Montserrat">Montserrat</option>
                                                    <option value="Morocco">Morocco</option>
                                                    <option value="Mozambique">Mozambique</option>
                                                    <option value="Myanmar">Myanmar (Burma)</option>
                                                    <option value="Namibia">Namibia</option>
                                                    <option value="Nauru">Nauru</option>
                                                    <option value="Nepal">Nepal</option>
                                                    <option value="Netherlands">Netherlands</option>
                                                    <option value="Netherlands Antilles">Curaçao</option>
                                                    <option value="New Caledonia">New Caledonia</option>
                                                    <option value="New Zealand">New Zealand</option>
                                                    <option value="Nicaragua">Nicaragua</option>
                                                    <option value="Niger">Niger</option>
                                                    <option value="Nigeria">Nigeria</option>
                                                    <option value="Niue">Niue</option>
                                                    <option value="Norfolk Island">Norfolk Island</option>
                                                    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                                    <option value="Norway">Norway</option>
                                                    <option value="Oman">Oman</option>
                                                    <option value="Pakistan">Pakistan</option>
                                                    <option value="Palau">Palau</option>
                                                    <option value="Palestinian Territory, Occupied">Palestine</option>
                                                    <option value="Panama">Panama</option>
                                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                                    <option value="Paraguay">Paraguay</option>
                                                    <option value="Peru">Peru</option>
                                                    <option value="Philippines">Philippines</option>
                                                    <option value="Pitcairn">Pitcairn Islands</option>
                                                    <option value="Poland">Poland</option>
                                                    <option value="Portugal">Portugal</option>
                                                    <option value="Puerto Rico">Puerto Rico</option>
                                                    <option value="Qatar">Qatar</option>
                                                    <option value="Reunion">Réunion</option>
                                                    <option value="Romania">Romania</option>
                                                    <option value="Russian Federation">Russia</option>
                                                    <option value="Rwanda">Rwanda</option>
                                                    <option value="Saint Barthelemy">St. Barthélemy</option>
                                                    <option value="Saint Helena">St. Helena</option>
                                                    <option value="Saint Kitts and Nevis">St. Kitts & Nevis</option>
                                                    <option value="Saint Lucia">St. Lucia</option>
                                                    <option value="Saint Martin">St. Martin</option>
                                                    <option value="Saint Pierre and Miquelon">St. Pierre & Miquelon</option>
                                                    <option value="Saint Vincent and the Grenadines">St. Vincent & Grenadines</option>
                                                    <option value="Samoa">Samoa</option>
                                                    <option value="San Marino">San Marino</option>
                                                    <option value="Sao Tome and Principe">São Tomé & Príncipe</option>
                                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                                    <option value="Senegal">Senegal</option>
                                                    <option value="Serbia">Serbia</option>
                                                    <option value="Serbia and Montenegro">Serbia</option>
                                                    <option value="Seychelles">Seychelles</option>
                                                    <option value="Sierra Leone">Sierra Leone</option>
                                                    <option value="Singapore">Singapore</option>
                                                    <option value="Sint Maarten">Sint Maarten</option>
                                                    <option value="Slovakia">Slovakia</option>
                                                    <option value="Slovenia">Slovenia</option>
                                                    <option value="Solomon Islands">Solomon Islands</option>
                                                    <option value="Somalia">Somalia</option>
                                                    <option value="South Africa">South Africa</option>
                                                    <option value="South Georgia and the South Sandwich Islands">South Georgia & South Sandwich Islands</option>
                                                    <option value="South Sudan">South Sudan</option>
                                                    <option value="Spain">Spain</option>
                                                    <option value="Sri Lanka">Sri Lanka</option>
                                                    <option value="Sudan">Sudan</option>
                                                    <option value="Suriname">Suriname</option>
                                                    <option value="Svalbard and Jan Mayen">Svalbard & Jan Mayen</option>
                                                    <option value="Swaziland">Eswatini</option>
                                                    <option value="Sweden">Sweden</option>
                                                    <option value="Switzerland">Switzerland</option>
                                                    <option value="Syrian Arab Republic">Syria</option>
                                                    <option value="Taiwan, Province of China">Taiwan</option>
                                                    <option value="Tajikistan">Tajikistan</option>
                                                    <option value="Tanzania, United Republic of">Tanzania</option>
                                                    <option value="Thailand">Thailand</option>
                                                    <option value="Timor-Leste">Timor-Leste</option>
                                                    <option value="Togo">Togo</option>
                                                    <option value="Tokelau">Tokelau</option>
                                                    <option value="Tonga">Tonga</option>
                                                    <option value="Trinidad and Tobago">Trinidad & Tobago</option>
                                                    <option value="Tunisia">Tunisia</option>
                                                    <option value="Turkey">Turkey</option>
                                                    <option value="Turkmenistan">Turkmenistan</option>
                                                    <option value="Turks and Caicos Islands">Turks & Caicos Islands</option>
                                                    <option value="Tuvalu">Tuvalu</option>
                                                    <option value="Uganda">Uganda</option>
                                                    <option value="Ukraine">Ukraine</option>
                                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                                    <option value="United Kingdom">United Kingdom</option>
                                                    
                                                    <option value="United States Minor Outlying Islands">U.S. Outlying Islands</option>
                                                    <option value="Uruguay">Uruguay</option>
                                                    <option value="Uzbekistan">Uzbekistan</option>
                                                    <option value="Vanuatu">Vanuatu</option>
                                                    <option value="Venezuela">Venezuela</option>
                                                    <option value="Viet Nam">Vietnam</option>
                                                    <option value="Virgin Islands, British">British Virgin Islands</option>
                                                    <option value="Virgin Islands, U.s.">U.S. Virgin Islands</option>
                                                    <option value="Wallis and Futuna">Wallis & Futuna</option>
                                                    <option value="Western Sahara">Western Sahara</option>
                                                    <option value="Yemen">Yemen</option>
                                                    <option value="Zambia">Zambia</option>
                                                    <option value="Zimbabwe">Zimbabwe</option>
                                               </select>
                                                <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">Phone *</p>
                                         </div>
                </div>
                {/*======================== contact form row city   + region end=======================*/}

            </div>
        </div>
    )

}

export default ApplicantInfo