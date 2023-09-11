import React from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const Index = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="index">
      <div
        className="iphone-pro"
        style={{
          overflow: screenWidth >= 393 && screenWidth < 393 ? "hidden" : undefined,
        }}
      >
        <div className="ellipse">
          {(screenWidth >= 393 || screenWidth < 393) && (
            <img
              className="icon-horizontal"
              alt="Icon horizontal"
              src="https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/---icon--horizontal-ellipsis-@2x.png"
            />
          )}
        </div>
        <div className="overlap" />
        {screenWidth >= 393 && screenWidth < 393 && (
          <div className="overlap-group">
            <img
              className="icon-bars"
              alt="Icon bars"
              src="https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/---icon--bars-@2x.png"
            />
            <img
              className="icon-shopping-cart"
              alt="Icon shopping cart"
              src="https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/---icon--shopping-cart--1@2x.png"
            />
            <img
              className="icon-user"
              alt="Icon user"
              src="https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/---icon--user-@2x.png"
            />
            <Link to="/index">
              <img
                className="icon-damaged-house"
                alt="Icon damaged house"
                src="https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/---icon--damaged-house--1@2x.png"
              />
            </Link>
          </div>
        )}

        <div
          className="match-your-style"
          style={{
            left:
              screenWidth >= 393 || screenWidth < 393
                ? "39px"
                : screenWidth >= 393 && screenWidth < 393
                ? "133px"
                : undefined,
            top:
              screenWidth >= 393 || screenWidth < 393
                ? "114px"
                : screenWidth >= 393 && screenWidth < 393
                ? "47px"
                : undefined,
            width:
              screenWidth >= 393 || screenWidth < 393
                ? "322px"
                : screenWidth >= 393 && screenWidth < 393
                ? "138px"
                : undefined,
          }}
        >
          {(screenWidth >= 393 || screenWidth < 393) && <>Match your style</>}

          {screenWidth >= 393 && screenWidth < 393 && <>My&nbsp;&nbsp; Cart</>}
        </div>
        {((screenWidth >= 393 && screenWidth < 393) || screenWidth < 393) && (
          <>
            <img
              className="image"
              style={{
                height: screenWidth < 393 ? "322px" : screenWidth >= 393 && screenWidth < 393 ? "170px" : undefined,
                left: screenWidth < 393 ? "24px" : screenWidth >= 393 && screenWidth < 393 ? "32px" : undefined,
                top: screenWidth < 393 ? "149px" : screenWidth >= 393 && screenWidth < 393 ? "104px" : undefined,
                width: screenWidth < 393 ? "351px" : screenWidth >= 393 && screenWidth < 393 ? "149px" : undefined,
              }}
              alt="Image"
              src={
                screenWidth < 393
                  ? "https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/image-1@2x.png"
                  : screenWidth >= 393 && screenWidth < 393
                  ? "https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/image-2@2x.png"
                  : undefined
              }
            />
            <div
              className="party-wear"
              style={{
                fontSize: screenWidth < 393 ? "24px" : screenWidth >= 393 && screenWidth < 393 ? "16px" : undefined,
                left: screenWidth < 393 ? "39px" : screenWidth >= 393 && screenWidth < 393 ? "197px" : undefined,
                top: screenWidth < 393 ? "501px" : screenWidth >= 393 && screenWidth < 393 ? "116px" : undefined,
                width: screenWidth < 393 ? "299px" : screenWidth >= 393 && screenWidth < 393 ? "129px" : undefined,
              }}
            >
              <span className="span">
                {screenWidth >= 393 && screenWidth < 393 && (
                  <>
                    casuals
                    <br />
                    <br />
                  </>
                )}

                {screenWidth < 393 && <>party wear</>}
              </span>
              {screenWidth < 393 && (
                <>
                  <p className="span-wrapper">
                    <span className="text-wrapper">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </p>
                  <p className="span-wrapper">
                    <span className="text-wrapper-2">
                      $32.5
                      <br />
                    </span>
                  </p>
                </>
              )}

              {screenWidth >= 393 && screenWidth < 393 && (
                <p className="span-wrapper">
                  <span className="text-wrapper-3">$23.5</span>
                </p>
              )}
            </div>
          </>
        )}

        <div
          className="div"
          style={{
            backgroundColor:
              screenWidth >= 393
                ? "#bfe3e5"
                : screenWidth >= 393 && screenWidth < 393
                ? "#d8c2ad"
                : screenWidth < 393
                ? "#cfe2dd"
                : undefined,
            borderRadius:
              screenWidth >= 393
                ? "20px"
                : screenWidth >= 393 && screenWidth < 393
                ? "10.5px"
                : screenWidth < 393
                ? "40px"
                : undefined,
            height:
              screenWidth >= 393
                ? "52px"
                : screenWidth >= 393 && screenWidth < 393
                ? "21px"
                : screenWidth < 393
                ? "77px"
                : undefined,
            left:
              screenWidth >= 393
                ? "30px"
                : screenWidth >= 393 && screenWidth < 393
                ? "197px"
                : screenWidth < 393
                ? "0"
                : undefined,
            top:
              screenWidth >= 393
                ? "161px"
                : screenWidth >= 393 && screenWidth < 393
                ? "189px"
                : screenWidth < 393
                ? "775px"
                : undefined,
            width:
              screenWidth >= 393
                ? "331px"
                : screenWidth >= 393 && screenWidth < 393
                ? "21px"
                : screenWidth < 393
                ? "393px"
                : undefined,
          }}
        >
          {(screenWidth >= 393 || screenWidth < 393) && (
            <img
              className="img"
              style={{
                height: screenWidth < 393 ? "20px" : screenWidth >= 393 ? "30px" : undefined,
                left: screenWidth < 393 ? "123px" : screenWidth >= 393 ? "9px" : undefined,
                top: screenWidth < 393 ? "29px" : screenWidth >= 393 ? "11px" : undefined,
                width: screenWidth < 393 ? "17px" : screenWidth >= 393 ? "30px" : undefined,
              }}
              alt="Icon bars"
              src={
                screenWidth < 393
                  ? "https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/---icon--bars-@2x.png"
                  : screenWidth >= 393
                  ? "https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/---icon--search-@2x.png"
                  : undefined
              }
            />
          )}

          {screenWidth >= 393 && <div className="text-wrapper-4">search</div>}

          {screenWidth < 393 && (
            <>
              <img
                className="icon-shopping-cart"
                alt="Icon shopping cart"
                src="https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/---icon--shopping-cart-@2x.png"
              />
              <img
                className="icon-user"
                alt="Icon user"
                src="https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/---icon--user-@2x.png"
              />
              <Link to="/index">
                <img
                  className="icon-damaged-house"
                  alt="Icon damaged house"
                  src="https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/---icon--damaged-house-@2x.png"
                />
              </Link>
            </>
          )}
        </div>
        {screenWidth >= 393 && screenWidth < 393 && (
          <img
            className="image-2"
            alt="Image"
            src="https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/image-5@2x.png"
          />
        )}

        {((screenWidth >= 393 && screenWidth < 393) || screenWidth < 393) && (
          <div
            className="formal-shirt"
            style={{
              color:
                screenWidth >= 393 && screenWidth < 393 ? "transparent" : screenWidth < 393 ? "#000000" : undefined,
              fontSize: screenWidth >= 393 && screenWidth < 393 ? "16px" : screenWidth < 393 ? "24px" : undefined,
              height: screenWidth >= 393 && screenWidth < 393 ? "38px" : screenWidth < 393 ? "34px" : undefined,
              left: screenWidth >= 393 && screenWidth < 393 ? "197px" : screenWidth < 393 ? "39px" : undefined,
              top: screenWidth >= 393 && screenWidth < 393 ? "307px" : screenWidth < 393 ? "549px" : undefined,
              width: screenWidth >= 393 && screenWidth < 393 ? "129px" : screenWidth < 393 ? "137px" : undefined,
            }}
          >
            {screenWidth >= 393 && screenWidth < 393 && (
              <>
                <p className="span-wrapper">
                  <span className="span">
                    Formal shirt
                    <br />
                    <br />
                  </span>
                </p>
                <p className="span-wrapper">
                  <span className="text-wrapper-3">$20</span>
                </p>
              </>
            )}

            {screenWidth < 393 && <>size</>}
          </div>
        )}

        <div
          className="overlap-2"
          style={{
            backgroundColor:
              screenWidth < 393
                ? "#d9d9d9"
                : screenWidth >= 393
                ? "#59b9a2"
                : screenWidth >= 393 && screenWidth < 393
                ? "#f2f1f0"
                : undefined,
            borderRadius:
              screenWidth < 393
                ? "20px/18px"
                : screenWidth >= 393
                ? "14px"
                : screenWidth >= 393 && screenWidth < 393
                ? "10.5px"
                : undefined,
            height:
              screenWidth < 393
                ? "36px"
                : screenWidth >= 393
                ? "40px"
                : screenWidth >= 393 && screenWidth < 393
                ? "21px"
                : undefined,
            left:
              screenWidth < 393
                ? "36px"
                : screenWidth >= 393
                ? "30px"
                : screenWidth >= 393 && screenWidth < 393
                ? "200px"
                : undefined,
            top:
              screenWidth < 393
                ? "594px"
                : screenWidth >= 393
                ? "239px"
                : screenWidth >= 393 && screenWidth < 393
                ? "374px"
                : undefined,
            width:
              screenWidth < 393
                ? "40px"
                : screenWidth >= 393
                ? "153px"
                : screenWidth >= 393 && screenWidth < 393
                ? "21px"
                : undefined,
          }}
        >
          {(screenWidth >= 393 || screenWidth < 393) && (
            <div
              className="s"
              style={{
                color: screenWidth < 393 ? "#000000" : screenWidth >= 393 ? "#1c473c" : undefined,
                fontSize: screenWidth < 393 ? "24px" : screenWidth >= 393 ? "16px" : undefined,
                height: screenWidth < 393 ? "26px" : undefined,
                left: screenWidth < 393 ? "8px" : screenWidth >= 393 ? "22px" : undefined,
                textAlign: screenWidth < 393 ? "center" : undefined,
                top: screenWidth < 393 ? "5px" : screenWidth >= 393 ? "9px" : undefined,
                whiteSpace: screenWidth < 393 ? "nowrap" : undefined,
                width: screenWidth < 393 ? "23px" : screenWidth >= 393 ? "109px" : undefined,
              }}
            >
              {screenWidth < 393 && <>S</>}

              {screenWidth >= 393 && <>Trending Now</>}
            </div>
          )}
        </div>
        {screenWidth >= 393 && screenWidth < 393 && (
          <>
            <img
              className="icon-trash"
              alt="Icon trash"
              src="https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/---icon--trash-@2x.png"
            />
            <img
              className="image-3"
              alt="Image"
              src="https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/image-6@2x.png"
            />
            <p className="t-shirt">
              <span className="span">
                T-shirt
                <br />
                <br />
              </span>
              <span className="text-wrapper-3">$17</span>
            </p>
          </>
        )}

        <div
          className="overlap-3"
          style={{
            backgroundColor:
              screenWidth < 393
                ? "#d9d9d9"
                : screenWidth >= 393 && screenWidth < 393
                ? "#060605"
                : screenWidth >= 393
                ? "#47b79c"
                : undefined,
            borderRadius:
              screenWidth < 393
                ? "20px/18px"
                : screenWidth >= 393 && screenWidth < 393
                ? "10.5px"
                : screenWidth >= 393
                ? "14px"
                : undefined,
            height:
              screenWidth < 393
                ? "36px"
                : screenWidth >= 393 && screenWidth < 393
                ? "21px"
                : screenWidth >= 393
                ? "40px"
                : undefined,
            left:
              screenWidth < 393
                ? "100px"
                : screenWidth >= 393 && screenWidth < 393
                ? "200px"
                : screenWidth >= 393
                ? "196px"
                : undefined,
            top:
              screenWidth < 393
                ? "594px"
                : screenWidth >= 393 && screenWidth < 393
                ? "567px"
                : screenWidth >= 393
                ? "239px"
                : undefined,
            width:
              screenWidth < 393
                ? "40px"
                : screenWidth >= 393 && screenWidth < 393
                ? "21px"
                : screenWidth >= 393
                ? "62px"
                : undefined,
          }}
        >
          {(screenWidth >= 393 || screenWidth < 393) && (
            <div
              className="m"
              style={{
                color: screenWidth < 393 ? "#000000" : screenWidth >= 393 ? "#22494c" : undefined,
                fontSize: screenWidth < 393 ? "24px" : screenWidth >= 393 ? "16px" : undefined,
                height: screenWidth < 393 ? "26px" : screenWidth >= 393 ? "28px" : undefined,
                left: screenWidth < 393 ? "8px" : screenWidth >= 393 ? "9px" : undefined,
                top: screenWidth < 393 ? "4px" : screenWidth >= 393 ? "5px" : undefined,
                whiteSpace: screenWidth < 393 ? "nowrap" : undefined,
                width: screenWidth < 393 ? "23px" : screenWidth >= 393 ? "45px" : undefined,
              }}
            >
              {screenWidth < 393 && <>M</>}

              {screenWidth >= 393 && <>All</>}
            </div>
          )}
        </div>
        {screenWidth >= 393 && screenWidth < 393 && (
          <img
            className="icon-trash-2"
            alt="Icon trash"
            src="https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/---icon--trash-@2x.png"
          />
        )}

        <div
          className="l-wrapper"
          style={{
            backgroundColor:
              (screenWidth >= 393 && screenWidth < 393) || screenWidth < 393
                ? "#d9d9d9"
                : screenWidth >= 393
                ? "#59b9a2"
                : undefined,
            borderRadius:
              screenWidth < 393
                ? "20px/18px"
                : screenWidth >= 393 && screenWidth < 393
                ? "10.5px"
                : screenWidth >= 393
                ? "14px"
                : undefined,
            height:
              screenWidth < 393
                ? "36px"
                : screenWidth >= 393 && screenWidth < 393
                ? "21px"
                : screenWidth >= 393
                ? "40px"
                : undefined,
            left:
              screenWidth < 393
                ? "160px"
                : screenWidth >= 393 && screenWidth < 393
                ? "244px"
                : screenWidth >= 393
                ? "271px"
                : undefined,
            top:
              screenWidth < 393
                ? "594px"
                : screenWidth >= 393 && screenWidth < 393
                ? "189px"
                : screenWidth >= 393
                ? "239px"
                : undefined,
            width:
              screenWidth < 393
                ? "40px"
                : screenWidth >= 393 && screenWidth < 393
                ? "21px"
                : screenWidth >= 393
                ? "90px"
                : undefined,
          }}
        >
          <div
            className="l"
            style={{
              color:
                (screenWidth >= 393 && screenWidth < 393) || screenWidth < 393
                  ? "#000000"
                  : screenWidth >= 393
                  ? "#294c46"
                  : undefined,
              fontSize:
                screenWidth < 393
                  ? "24px"
                  : (screenWidth >= 393 && screenWidth < 393) || screenWidth >= 393
                  ? "16px"
                  : undefined,
              height:
                screenWidth < 393
                  ? "26px"
                  : screenWidth >= 393 && screenWidth < 393
                  ? "15px"
                  : screenWidth >= 393
                  ? "21px"
                  : undefined,
              left:
                screenWidth < 393
                  ? "8px"
                  : screenWidth >= 393 && screenWidth < 393
                  ? "5px"
                  : screenWidth >= 393
                  ? "20px"
                  : undefined,
              top:
                screenWidth < 393
                  ? "4px"
                  : screenWidth >= 393 && screenWidth < 393
                  ? "5px"
                  : screenWidth >= 393
                  ? "9px"
                  : undefined,
              whiteSpace: (screenWidth >= 393 && screenWidth < 393) || screenWidth < 393 ? "nowrap" : undefined,
              width:
                screenWidth < 393
                  ? "23px"
                  : screenWidth >= 393 && screenWidth < 393
                  ? "12px"
                  : screenWidth >= 393
                  ? "56px"
                  : undefined,
            }}
          >
            {((screenWidth >= 393 && screenWidth < 393) || screenWidth < 393) && <>l</>}

            {screenWidth >= 393 && <>New</>}
          </div>
        </div>
        {((screenWidth >= 393 && screenWidth < 393) || screenWidth < 393) && (
          <div
            className="xl-wrapper"
            style={{
              borderRadius:
                screenWidth < 393 ? "20px/18px" : screenWidth >= 393 && screenWidth < 393 ? "10.5px" : undefined,
              height: screenWidth < 393 ? "36px" : screenWidth >= 393 && screenWidth < 393 ? "21px" : undefined,
              left: screenWidth < 393 ? "217px" : screenWidth >= 393 && screenWidth < 393 ? "249px" : undefined,
              top: screenWidth < 393 ? "594px" : screenWidth >= 393 && screenWidth < 393 ? "374px" : undefined,
              width: screenWidth < 393 ? "40px" : screenWidth >= 393 && screenWidth < 393 ? "21px" : undefined,
            }}
          >
            <div
              className="xl"
              style={{
                fontSize: screenWidth < 393 ? "24px" : screenWidth >= 393 && screenWidth < 393 ? "16px" : undefined,
                height: screenWidth < 393 ? "26px" : screenWidth >= 393 && screenWidth < 393 ? "15px" : undefined,
                left: screenWidth < 393 ? "8px" : screenWidth >= 393 && screenWidth < 393 ? "5px" : undefined,
                width: screenWidth < 393 ? "23px" : screenWidth >= 393 && screenWidth < 393 ? "12px" : undefined,
              }}
            >
              {screenWidth < 393 && <>xl</>}

              {screenWidth >= 393 && screenWidth < 393 && <>l</>}
            </div>
          </div>
        )}

        {screenWidth >= 393 && screenWidth < 393 && (
          <div className="div-wrapper">
            <div className="text-wrapper-5">l</div>
          </div>
        )}

        {((screenWidth >= 393 && screenWidth < 393) || screenWidth < 393) && (
          <div
            className="grand-total"
            style={{
              color:
                screenWidth >= 393 && screenWidth < 393 ? "transparent" : screenWidth < 393 ? "#000000" : undefined,
              height: screenWidth >= 393 && screenWidth < 393 ? "36px" : screenWidth < 393 ? "34px" : undefined,
              left: screenWidth >= 393 && screenWidth < 393 ? "39px" : screenWidth < 393 ? "36px" : undefined,
              top: screenWidth >= 393 && screenWidth < 393 ? "677px" : screenWidth < 393 ? "644px" : undefined,
              width: screenWidth >= 393 && screenWidth < 393 ? "301px" : screenWidth < 393 ? "137px" : undefined,
            }}
          >
            {screenWidth >= 393 && screenWidth < 393 && (
              <>
                <p className="span-wrapper">
                  <span className="span">
                    Grand Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </p>
                <p className="span-wrapper">
                  <span className="text-wrapper-6"> $60.5</span>
                </p>
              </>
            )}

            {screenWidth < 393 && <>Colour</>}
          </div>
        )}

        {((screenWidth >= 393 && screenWidth < 393) || screenWidth >= 393) && (
          <div
            className="overlap-4"
            style={{
              height: screenWidth >= 393 && screenWidth < 393 ? "37px" : screenWidth >= 393 ? "170px" : undefined,
              left: screenWidth >= 393 && screenWidth < 393 ? "-8px" : screenWidth >= 393 ? "30px" : undefined,
              top: screenWidth >= 393 && screenWidth < 393 ? "730px" : screenWidth >= 393 ? "310px" : undefined,
              width: screenWidth >= 393 && screenWidth < 393 ? "399px" : screenWidth >= 393 ? "138px" : undefined,
            }}
          >
            {screenWidth >= 393 && (
              <img
                className="image-4"
                alt="Image"
                src="https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/image-1-1@2x.png"
              />
            )}

            <div
              className="ellipse-2"
              style={{
                backgroundColor:
                  screenWidth >= 393 ? "#ffffff" : screenWidth >= 393 && screenWidth < 393 ? "#489184" : undefined,
                borderRadius:
                  screenWidth >= 393 ? "15px/14px" : screenWidth >= 393 && screenWidth < 393 ? "40px" : undefined,
                height: screenWidth >= 393 ? "28px" : screenWidth >= 393 && screenWidth < 393 ? "35px" : undefined,
                left: screenWidth >= 393 ? "8px" : screenWidth >= 393 && screenWidth < 393 ? "38px" : undefined,
                top: screenWidth >= 393 ? "10px" : screenWidth >= 393 && screenWidth < 393 ? "2px" : undefined,
                width: screenWidth >= 393 ? "30px" : screenWidth >= 393 && screenWidth < 393 ? "138px" : undefined,
              }}
            />
            {screenWidth >= 393 && (
              <img
                className="icon-heart"
                alt="Icon heart"
                src="https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/---icon--heart-@2x.png"
              />
            )}

            {screenWidth >= 393 && screenWidth < 393 && (
              <>
                <div className="text-wrapper-7">Check Out</div>
                <img
                  className="rectangle"
                  alt="Rectangle"
                  src="https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/rectangle-6-1.svg"
                />
                <div className="text-wrapper-8">Buy</div>
              </>
            )}
          </div>
        )}

        {screenWidth >= 393 && (
          <>
            <div className="overlap-5">
              <div className="ellipse-3" />
              <img
                className="icon-heart-2"
                alt="Icon heart"
                src="https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/---icon--heart--1@2x.png"
              />
            </div>
            <div className="overlap-6">
              <div className="ellipse-4" />
              <img
                className="icon-heart-3"
                alt="Icon heart"
                src="https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/---icon--heart-@2x.png"
              />
            </div>
            <div className="overlap-7">
              <div className="ellipse-5" />
              <img
                className="icon-heart-4"
                alt="Icon heart"
                src="https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/---icon--heart-@2x.png"
              />
            </div>
            <p className="p">
              <span className="span">
                party wear
                <br />
              </span>
              <span className="text-wrapper-3">$32.5</span>
            </p>
            <p className="casuals">
              <span className="span">
                casuals
                <br />
              </span>
              <span className="text-wrapper-3">$23.5</span>
            </p>
            <p className="blazzers">
              <span className="span">
                Blazzers
                <br />
              </span>
              <span className="text-wrapper-3">$45.2</span>
            </p>
            <p className="trip-wear">
              <span className="span">
                Trip wear
                <br />
              </span>
              <span className="text-wrapper-3">$20</span>
            </p>
          </>
        )}

        {(screenWidth >= 393 || screenWidth < 393) && (
          <div
            className="ellipse-6"
            style={{
              backgroundColor: screenWidth < 393 ? "#eb0808" : screenWidth >= 393 ? "#cfe2dd" : undefined,
              borderRadius: screenWidth < 393 ? "20px/18px" : screenWidth >= 393 ? "40px" : undefined,
              height: screenWidth < 393 ? "36px" : screenWidth >= 393 ? "77px" : undefined,
              left: screenWidth < 393 ? "31px" : screenWidth >= 393 ? "0" : undefined,
              top: screenWidth < 393 ? "679px" : screenWidth >= 393 ? "775px" : undefined,
              width: screenWidth < 393 ? "40px" : screenWidth >= 393 ? "393px" : undefined,
            }}
          >
            {screenWidth >= 393 && (
              <>
                <img
                  className="icon-bars"
                  alt="Icon bars"
                  src="https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/---icon--bars-@2x.png"
                />
                <img
                  className="icon-shopping-cart"
                  alt="Icon shopping cart"
                  src="https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/---icon--shopping-cart-@2x.png"
                />
                <img
                  className="icon-user"
                  alt="Icon user"
                  src="https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/---icon--user-@2x.png"
                />
                <img
                  className="icon-damaged-house-2"
                  alt="Icon damaged house"
                  src="https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/---icon--damaged-house-@2x.png"
                />
              </>
            )}
          </div>
        )}

        {screenWidth < 393 && (
          <>
            <div className="ellipse-7" />
            <div className="ellipse-8" />
            <div className="ellipse-9" />
            <div className="overlap-8">
              <img
                className="rectangle-2"
                alt="Rectangle"
                src="https://cdn.animaapp.com/projects/64ff193fe0658c151167941d/releases/64ff2830aa3502c1cb516c9b/img/rectangle-6.svg"
              />
              <div className="text-wrapper-9">Add to cart</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
