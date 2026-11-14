const Footer = () => {
    return (
        <footer className="bg-zinc-950 text-gray-400 border-t border-zinc-800/80 mt-16 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-extrabold uppercase text-red-700 tracking-wider">
                            Movie
                        </h2>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Trang web xem phim trực tuyến miễn phí với kho phim đa dạng, cập nhật liên tục các bộ phim mới nhất và chất lượng cao.
                        </p>
                        <div className="flex items-center space-x-3 pt-2">
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 hover:border-red-600 hover:bg-red-700 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200"
                                aria-label="Facebook"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 hover:border-red-600 hover:bg-red-700 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200"
                                aria-label="YouTube"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 hover:border-red-600 hover:bg-red-700 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200"
                                aria-label="TikTok"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97v7.54c0 2.22-.64 4.45-1.99 6.22-1.92 2.58-5.18 3.8-8.36 3.1-3.69-.73-6.42-3.88-6.62-7.61-.26-3.8 2.37-7.24 6.14-7.97.94-.18 1.91-.18 2.86-.03v4.11a3.84 3.84 0 0 0-2.31.25c-1.39.63-2.26 2.06-2.14 3.57.11 1.67 1.39 3.05 3.06 3.25 1.99.25 3.9-1.12 4.15-3.11.05-.4.07-.81.07-1.22V.02z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-white text-base font-semibold uppercase tracking-wider mb-4 border-l-4 border-red-700 pl-3">
                            Khám phá
                        </h3>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <a href="#" className="hover:text-red-500 transition-colors duration-150">Trang chủ</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-500 transition-colors duration-150">Phim hot tuần này</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-500 transition-colors duration-150">Phim đề cử</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-500 transition-colors duration-150">Phim chiếu rạp</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-500 transition-colors duration-150">Phim bộ mới cập nhật</a>
                            </li>
                        </ul>
                    </div>

                    {/* Genres */}
                    <div>
                        <h3 className="text-white text-base font-semibold uppercase tracking-wider mb-4 border-l-4 border-red-700 pl-3">
                            Thể loại
                        </h3>
                        <ul className="grid grid-cols-2 gap-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-red-500 transition-colors duration-150">Hành động</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-500 transition-colors duration-150">Kinh dị</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-500 transition-colors duration-150">Hoạt hình</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-500 transition-colors duration-150">Tình cảm</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-500 transition-colors duration-150">Viễn tưởng</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-500 transition-colors duration-150">Hài hước</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-500 transition-colors duration-150">Phiêu lưu</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-500 transition-colors duration-150">Tài liệu</a>
                            </li>
                        </ul>
                    </div>

                    {/* Support & Legal */}
                    <div>
                        <h3 className="text-white text-base font-semibold uppercase tracking-wider mb-4 border-l-4 border-red-700 pl-3">
                            Hỗ trợ & Điều khoản
                        </h3>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <a href="#" className="hover:text-red-500 transition-colors duration-150">Về chúng tôi</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-500 transition-colors duration-150">Điều khoản dịch vụ</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-500 transition-colors duration-150">Chính sách quyền riêng tư</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-500 transition-colors duration-150">Khiếu nại bản quyền</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-500 transition-colors duration-150">Trung tâm trợ giúp</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
                    <p>&copy; {new Date().getFullYear()} MOVIE. Tất cả các quyền được bảo lưu.</p>
                    <p className="text-center sm:text-right">
                        Trang web phục vụ cho mục đích học tập và giải trí cá nhân.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
