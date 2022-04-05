import React from "react";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="totalContainer">
      <div className="total">
        <div className="firstBlog">
          <p>
            <strong>1) কনটেক্স এপিআই কী?</strong>
            <br />
            Answer ➤ কনটেক্সট এপিআই হল রিঅ্যাক্ট ফ্রেমওয়ার্ক দ্বারা প্রদত্ত
            একটি কম্পোনেন্ট স্ট্রাকচার, যা আমাদের অ্যাপ্লিকেশনের সমস্ত স্তরে
            নির্দিষ্ট ফর্মের ডেটা শেয়ার করতে সক্ষম করে। এটি প্রপ ড্রিলিংয়ের
            সমস্যা সমাধানের লক্ষ্যে। প্রসঙ্গ API আসলে সবসময় সেখানে ছিল কিন্তু
            পরীক্ষামূলক বলে মনে করা হত। এপিআইকে স্থিতিশীলতার দিকে এগিয়ে নিয়ে
            যাওয়া এবং 16.3 সংস্করণের প্রকাশের সময়, বৈশিষ্ট্যটি উপলব্ধ করা
            হয়েছিল এবং পরবর্তীতে বৈশিষ্ট্যগুলির গোষ্ঠীতে একটি নতুন সংযোজন
            হিসাবে বিবেচনা করা হয়েছিল যা প্রতিক্রিয়াকে একটি দুর্দান্ত কাঠামো
            তৈরি করে।
          </p>
        </div>
        <br />
        <div className="secondBlog">
          <p>
            <strong>2) সিমেন্টিক ট্যাগ কী?</strong>
            <br />
            Answer ➤ শব্দার্থিক এইচটিএমএল ট্যাগগুলি আপনাকে আপনার মার্কআপে অর্থ
            যোগ করার অনুমতি দেয় যাতে সার্চ ইঞ্জিন, স্ক্রিন রিডার এবং ওয়েব
            ব্রাউজারগুলি এটিকে বোঝাতে পারে। ডিফল্টরূপে, যখন একজন ব্যবহারকারী
            এজেন্ট আপনার বিষয়বস্তু পড়ে তখন এটি প্রসঙ্গ এবং অর্থ বুঝতে পারে না।
            শব্দার্থিক এইচটিএমএল ট্যাগগুলি আপনাকে আপনার ব্যবহারকারীদের কাছে
            কাঠামোগত সামগ্রী পরিবেশন করতে দেয়, যা অন-পৃষ্ঠা এসইও এবং
            অ্যাক্সেসযোগ্যতার জন্য বিশেষভাবে গুরুত্বপূর্ণ। যদিও আগের HTML
            সংস্করণে শব্দার্থিক ট্যাগগুলি বিদ্যমান ছিল, HTML5 স্পেসিফিকেশনগুলি
            সিনট্যাক্সে বেশ কিছু নতুন শব্দার্থিক উপাদান যুক্ত করেছে - উভয় ব্লক
            এবং ইনলাইন স্তরে।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
