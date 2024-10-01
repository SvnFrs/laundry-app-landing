import Image from "next/image";
import Face1 from "@/public/images/face1.webp";
import Face2 from "@/public/images/face2.jpg";
import Face3 from "@/public/images/face3.webp";

export default function LargeTestimonial() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-6 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#D1D5DB"
                />
              </svg>
              <Image
                className="rounded-full"
                src={Face1}
                width={48}
                height={48}
                alt="Large testimonial"
              />
            </div>
            <p className="text-2xl font-bold text-gray-900">
            "Thật tuyệt vời khi có Easy Laundry! Giờ đây, việc giặt giũ trở nên nhẹ nhàng hơn bao giờ hết. Từ việc chọn địa điểm đến {" "}
              <em className="italic text-gray-500">
              theo dõi đơn hàng
              </em>
              , mọi thứ đều trong tầm tay. Easy Laundry chính là người bạn thân thiết giúp tôi giải quyết mọi vấn đề về giặt ủi."
            </p>

            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">Trần Đại Nhân</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <a className="text-sky-500" href="#0">
                Sinh viên Đại học FPT Cần Thơ
              </a>
            </div>
          </div>
        </div>

        <div className="py-6 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#D1D5DB"
                />
              </svg>
              <Image
                className="rounded-full"
                src={Face2}
                width={48}
                height={48}
                alt="Large testimonial"
              />
            </div>
            <p className="text-2xl font-bold text-gray-900">
            "Cuộc sống bận rộn khiến tôi chẳng có thời gian cho việc giặt giũ. May mắn là tôi đã tìm thấy Easy Laundry! Ứng dụng này giúp tôi tiết kiệm rất nhiều thời gian và công sức. Chỉ cần vài thao tác đơn giản trên điện thoại, quần áo sẽ được giặt sạch và giao đến tận nơi. Thật tuyệt vời!"
            </p>

            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">Lâm Tấn Phát</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <a className="text-sky-500" href="#0">
                Nhân viên văn phòng
              </a>
            </div>
          </div>
        </div>

        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#D1D5DB"
                />
              </svg>
              <Image
                className="rounded-full"
                src={Face3}
                width={48}
                height={48}
                alt="Large testimonial"
              />
            </div>
            <p className="text-2xl font-bold text-gray-900">
            "Phải thừa nhận rằng tôi là người khá kỹ tính trong việc lựa chọn ứng dụng, nhưng Easy Laundry đã chinh phục tôi hoàn toàn. Giao diện trực quan, dễ sử dụng, màu sắc hài hòa, tạo cảm giác dễ chịu. Dù còn một số tính năng chưa hoàn thiện, nhưng tôi hoàn toàn hài lòng với trải nghiệm mà ứng dụng mang lại."
            </p>

            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">Lê Hữu Khoa</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <a className="text-sky-500" href="#0">
                Giảng viên Đại học Cần Thơ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
