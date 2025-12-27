---
title: "Rust vs. C: Quantifying Memory Safety in Critical Systems"
date: "02-19-2025"
slug: "rust-vs-c"
tag: ["rust", "c"]
time: "15 min"
description: "This blog post compares memory safety in Rust and C, focusing on vulnerabilities like buffer overflows and use-after-free errors. It highlights Rust's ownership model and compile-time checks as key advantages over C in reducing memory-related bugs. The analysis offers insights for developers and organizations prioritizing system reliability and security in critical applications."
---
<p align="center">
  <img src="/blog/rust-vs-c/01.png" height="350" width="350" alt="First">
</p>

<h2 align="center">Introduction</h2>
<h3>Purpose</h3>
In this post, we will perform an objective assessment of Rust vs C, looking at those in the critical system context of memory safety, being environments where software failure could bring catastrophic outcomes. Language design, real-world vulnerabilities, and quantitative data will show how Rust's compile-time guarantees help avoid pitfalls inherent to C's manual memory management and why this is critical to such industries as aerospace, healthcare, and embedded systems.

<div style="background-color: #1c1c1c; border-left: 6px solid #ffcc00; padding: 15px; margin: 20px 0; color: #d4d4d4;">
    <strong style="color: #ffcc00;">Warning:</strong> <strong style="color: #ffffff">This post (although very reliable) is heavily influenced by my personal opinions, based on my experiences using both languages and my studies on the topic. Don't take anything from here as an absolute truth, have your own experiences and carry out your own studies.</strong>
</div>

<div style="background-color: #000000; border-left: 6px solid #6002a8; padding: 15px; margin: 20px 0; color: #A5A5A5;">
    <strong style="color: #ffffff">Note:</strong> If you're already familiar with what <i>Memory-Related Vulnerabilities</i> are and the basics of <i>Memory Safety</i>, feel free to skip ahead to the 
    <a href="#" style="color: #3162d4;" onclick="document.getElementById('rust-vs-c-language-mechanisms-for-memory-safety').scrollIntoView({ behavior: 'smooth' }); return false;">
        Rust vs. C: Language Mechanisms for Memory Safety
    </a> 
    section.
</div>

<h3>What is Memory Safety?</h3>
<p>
    Memory safety characterizes a programming language or environment that enables a program to write to and read from the main memory in a reliable and known manner in such a way that it does not give rise to crashes, security exploits, or erratic behavior. Memory-safe languages and environments guarantee that such pitfalls as writing to arbitrary places in memory, writing outside memory bounds allocated, or dereferencing already freed memory cannot happen. Such protections are a must have for building dependable and safe programs, especially in spheres where failure means severe consequences. 
</p>

<h3>Why Memory Safety Matters in Critical Systems</h3>
<p>
    In systems where human lives, infrastructure, or sensitive data are at stake, memory safety is not just a luxury—it is a necessity. For example:
</p>
<ul>
    <li>
        <b>Aerospace</b>: A single buffer overflow in flight control software could destabilize an aircraft, potentially leading to catastrophic outcomes.
    </li>
    <li>
        <b>Medical Devices</b>: A dangling pointer in a pacemaker's firmware might trigger fatal malfunctions, endangering patients' lives.
    </li>
    <li>
        <b>Embedded Systems</b>: Memory leaks in industrial controllers could halt production lines, resulting in significant financial losses and operational disruptions.
    </li>
</ul>
<p>
    In such domains, reliability is non-negotiable. Resilience to crashes, exploits, and unpredictable behavior directly depends on memory safety.
</p>

<h3>The Risks of Memory-Related Vulnerabilities</h3>
<p>
    Memory-unsafe code, such as that written in C or C++, can introduce insidious and serious risks:
</p>
<ul>
    <li><b>Buffer Overflows</b>: Writing beyond allocated memory can corrupt data or expose systems to remote code execution attacks (e.g., the 2003 Slammer worm exploited a SQL Server buffer overflow).</li>
    <li><b>Use-After-Free</b>: Accessing deallocated memory can crash systems or create exploitable gaps (e.g., the 2019 Linux kernel privilege escalation <a href="https://nvd.nist.gov/vuln/detail/CVE-2019-8912" style="color: #3162d4;">CVE-2019-8912</a>).</li>
    <li><b>Null Dereferences</b>: Unchecked null pointers lead to undefined behavior, often crashing programs abruptly.</li>
</ul>
These vulnerabilities dominate lists like <a href="https://cwe.mitre.org/top25/archive/2024/2024_cwe_top25.html" style="color: #3162d4;">MITRE’s Top 25 Most Dangerous Software Weaknesses</a>, underscoring why memory safety demands urgent attention in critical software.
<p>
    Memory safety mechanisms, such as those found in languages like Rust or managed environments like Java and Python, help mitigate these risks by enforcing strict rules on memory access and management. This ensures that programs operate within safe boundaries, reducing the likelihood of critical failures and security breaches.
</p>

<h3>Why Memory Safety Matters in Critical Systems</h3>
In systems where humans' lives, infrastructures, or sensitive data are at stake, memory safety isn't a luxury, but rather a necessity. For example:
<ul>
    <li><b>Aerospace</b>: A single buffer overflow in flight control software could destabilize an aircraft.</li>
    <li><b>Medical Devices</b>:  A dangling pointer in a pacemaker's firmware might trigger fatal malfunctions.</li>
    <li><b>Embedded Systems</b>: Memory leaks in industrial controllers could halt production lines, costing millions.</li>
    In such domains, reliability simply isn't negotiable; resilience to crashes, exploits, and unpredictable behavior directly depends on memory safety.
</ul>

<h2 align="center" id="rust-vs-c-language-mechanisms-for-memory-safety">Rust vs. C: Language Mechanisms for Memory Safety</h2>
First of all, we need to compare how Rust and C handles memory management and safety:

<h3 style="margin-bottom: 10px;">C: Manual Memory Management and Risks</h3>
<p style="margin-bottom: 15px;">C gives developers fine-grained control over memory but places the burden of safety entirely on the programmer. Key features and risks include:</p>

<ul style="list-style-type: disc; margin-left: 20px; margin-bottom: 20px;">
    <li style="margin-bottom: 10px;"><strong>Manual Memory Allocation/Deallocation</strong>:
        <ul style="list-style-type: circle; margin-left: 20px;">
            <li style="margin-bottom: 5px;"><code style="background-color: #2d2d2d; color: #f8f8f2; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', Courier, monospace;">malloc</code>, <code style="background-color: #2d2d2d; color: #f8f8f2; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', Courier, monospace;">calloc</code>, <code style="background-color: #2d2d2d; color: #f8f8f2; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', Courier, monospace;">realloc</code>: Dynamically allocate memory on the heap.</li>
            <li style="margin-bottom: 5px;"><code style="background-color: #2d2d2d; color: #f8f8f2; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', Courier, monospace;">free</code>: Explicitly deallocate memory. Forgetting to call <code style="background-color: #2d2d2d; color: #f8f8f2; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', Courier, monospace;">free</code> leads to <strong>memory leaks</strong>.</li>
            <li style="margin-bottom: 5px;">Example risk: Double-free errors (calling <code style="background-color: #2d2d2d; color: #f8f8f2; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', Courier, monospace;">free</code> on the same pointer twice) or use-after-free (accessing freed memory).</li>
        </ul>
    </li>
    <li style="margin-bottom: 10px;"><strong>Pointers and Direct Memory Access</strong>:
        <ul style="list-style-type: circle; margin-left: 20px;">
            <li style="margin-bottom: 5px;">Raw pointers allow direct memory manipulation, but misuse can cause:
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li style="margin-bottom: 5px;"><strong>Dangling pointers</strong>: Pointers referencing invalid memory.</li>
                    <li style="margin-bottom: 5px;"><strong>Buffer overflows</strong>: Writing beyond allocated memory (e.g., in arrays).</li>
                </ul>
            </li>
        </ul>
    </li>
    <li style="margin-bottom: 10px;"><strong>No Built-in Safety Mechanisms</strong>:
        <ul style="list-style-type: circle; margin-left: 20px;">
            <li style="margin-bottom: 5px;">C compilers do not enforce memory safety checks. Undefined behavior (UB) arises from mistakes like null pointer dereferencing or out-of-bounds access.</li>
        </ul>
    </li>
    <li style="margin-bottom: 10px;"><strong>Tooling Mitigations</strong>:
        <ul style="list-style-type: circle; margin-left: 20px;">
            <li style="margin-bottom: 5px;">Developers rely on external tools (e.g., <strong>Valgrind</strong>, <strong>AddressSanitizer</strong>) to detect leaks or memory corruption.</li>
            <li style="margin-bottom: 5px;">Static analyzers (e.g., <strong>Clang Static Analyzer</strong>) help identify potential issues, but these are not part of the language itself.</li>
        </ul>
    </li>
    <li style="margin-bottom: 10px;"><strong>Flexibility vs. Risk</strong>:
        <ul style="list-style-type: circle; margin-left: 20px;">
            <li style="margin-bottom: 5px;">C’s minimalism allows unparalleled control over hardware, making it ideal for low-level systems. However, this comes at the cost of frequent memory-related bugs in complex codebases.</li>
        </ul>
    </li>
</ul>

<h3 style="margin-bottom: 10px;">Rust: Compiler-Enforced Memory Safety</h3>
<p style="margin-bottom: 15px;">Rust eliminates common memory errors <em>at compile time</em> through a unique ownership system and strict compile-time checks, without garbage collection.</p>

<ul style="list-style-type: disc; margin-left: 20px; margin-bottom: 20px;">
    <li style="margin-bottom: 10px;"><strong>Ownership Model</strong>:
        <ul style="list-style-type: circle; margin-left: 20px;">
            <li style="margin-bottom: 5px;"><strong>Single Ownership</strong>: Each value has one owner. When the owner goes out of scope, memory is automatically freed (via <strong>RAII</strong>).</li>
            <li style="margin-bottom: 5px;"><strong>Move Semantics</strong>: Ownership can be transferred ("moved"), invalidating the original variable to prevent duplicates.</li>
            <li style="margin-bottom: 5px;">Example: <code style="background-color: #2d2d2d; color: #f8f8f2; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', Courier, monospace;">let s1 = String::from("hello"); let s2 = s1;</code> (s1 is now invalid).</li>
        </ul>
    </li>
    <li style="margin-bottom: 10px;"><strong>Borrowing and References</strong>:
        <ul style="list-style-type: circle; margin-left: 20px;">
            <li style="margin-bottom: 5px;"><strong>Immutable vs. Mutable References</strong>: You can have either:
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li style="margin-bottom: 5px;">Multiple immutable references (<code style="background-color: #2d2d2d; color: #f8f8f2; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', Courier, monospace;">&T</code>), <strong>or</strong></li>
                    <li style="margin-bottom: 5px;">One mutable reference (<code style="background-color: #2d2d2d; color: #f8f8f2; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', Courier, monospace;">&mut T</code>), but not both simultaneously.</li>
                </ul>
            </li>
            <li style="margin-bottom: 5px;">Prevents data races and aliasing issues at compile time.</li>
        </ul>
    </li>
    <li style="margin-bottom: 10px;"><strong>Lifetimes</strong>:
        <ul style="list-style-type: circle; margin-left: 20px;">
            <li style="margin-bottom: 5px;">Annotations (e.g., <code style="background-color: #2d2d2d; color: #f8f8f2; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', Courier, monospace;">'a</code>) ensure references remain valid for their entire scope.</li>
            <li style="margin-bottom: 5px;">The compiler rejects code with dangling references.</li>
        </ul>
    </li>
    <li style="margin-bottom: 10px;"><strong>Smart Pointers</strong>:
        <ul style="list-style-type: circle; margin-left: 20px;">
            <li style="margin-bottom: 5px;">Types like <code style="background-color: #2d2d2d; color: #f8f8f2; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', Courier, monospace;">Box&lt;T&gt;</code> (heap allocation), <code style="background-color: #2d2d2d; color: #f8f8f2; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', Courier, monospace;">Rc&lt;T&gt;</code> (reference counting), and <code style="background-color: #2d2d2d; color: #f8f8f2; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', Courier, monospace;">Arc&lt;T&gt;</code> (thread-safe reference counting) manage memory safely.</li>
            <li style="margin-bottom: 5px;"><code style="background-color: #2d2d2d; color: #f8f8f2; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', Courier, monospace;">Mutex&lt;T&gt;</code> and <code style="background-color: #2d2d2d; color: #f8f8f2; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', Courier, monospace;">RwLock&lt;T&gt;</code> enforce safe concurrent access.</li>
        </ul>
    </li>
    <li style="margin-bottom: 10px;"><strong>No Null or Dangling Pointers</strong>:
        <ul style="list-style-type: circle; margin-left: 20px;">
            <li style="margin-bottom: 5px;"><strong><code style="background-color: #2d2d2d; color: #f8f8f2; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', Courier, monospace;">Option&lt;T&gt;</code></strong> replaces nulls, forcing explicit handling of "no value" cases.</li>
            <li style="margin-bottom: 5px;"><strong>Unsafe Code</strong>: Restricted to explicitly marked <code style="background-color: #2d2d2d; color: #f8f8f2; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', Courier, monospace;">unsafe</code> blocks for low-level operations (e.g., raw pointers), isolating risky code.</li>
        </ul>
    </li>
    <li style="margin-bottom: 10px;"><strong>Compile-Time Guarantees</strong>:
        <ul style="list-style-type: circle; margin-left: 20px;">
            <li style="margin-bottom: 5px;">The <strong>borrow checker</strong> enforces ownership and borrowing rules during compilation, eliminating runtime overhead for safety checks.</li>
        </ul>
    </li>
</ul>

<h3 id="comparison" style="margin-bottom: 10px;">Key Differences</h3>
<table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead>
        <tr>
            <th style="border: 1px solid #444; padding: 10px; text-align: left; background-color: #333; color: #ffffff;">Feature</th>
            <th style="border: 1px solid #444; padding: 10px; text-align: left; background-color: #333; color: #ffffff;">C</th>
            <th style="border: 1px solid #444; padding: 10px; text-align: left; background-color: #333; color: #ffffff;">Rust</th>
        </tr>
    </thead>
    <tbody>
        <tr style="background-color: #1e1e1e;">
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;"><strong style="color: #ffffff;">Memory Management</strong></td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;">Manual (<code style="background-color: #2d2d2d; color: #ffffff; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', Courier, monospace;">malloc</code>/<code style="background-color: #2d2d2d; color: #ffffff; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', Courier, monospace;">free</code>)</td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;">Automatic via ownership/RAII</td>
        </tr>
        <tr style="background-color: #2d2d2d;">
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;"><strong style="color: #ffffff;">Safety Checks</strong></td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;">Runtime tools (optional)</td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;">Compile-time enforcement</td>
        </tr>
        <tr style="background-color: #1e1e1e;">
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;"><strong style="color: #ffffff;">Pointers</strong></td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;">Raw pointers, prone to misuse</td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;">References checked by borrow checker</td>
        </tr>
        <tr style="background-color: #2d2d2d;">
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;"><strong style="color: #ffffff;">Concurrency</strong></td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;">Prone to data races</td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;">Safe concurrency via ownership rules</td>
        </tr>
        <tr style="background-color: #1e1e1e;">
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;"><strong style="color: #ffffff;">Null Handling</strong></td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;">Explicit null pointers</td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;"><code style="background-color: #2d2d2d; color: #ffffff; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', Courier, monospace;">Option&lt;T&gt;</code> enforces null safety</td>
        </tr>
        <tr style="background-color: #2d2d2d;">
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;"><strong style="color: #ffffff;">Overhead</strong></td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;">Minimal runtime overhead</td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;">No runtime GC; compile-time checks only</td>
        </tr>
        <tr style="background-color: #1e1e1e;">
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;"><strong style="color: #ffffff;">Learning Curve</strong></td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;">Simple syntax, complex safety pitfalls</td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;">Steeper due to ownership rules, also, the deeper you delve into the language, the more difficulty you may have with technical concepts</td>
        </tr>
    </tbody>
</table>

<h2 align="center">Quantitative Comparisons</h2>

<h3>Vulnerability Statistics</h3>

<h4>C/C++ Projects: A Legacy of Memory-Related CVEs</h4>
<p>Memory safety vulnerabilities dominate historical CVEs in C/C++. For example:</p>
<ul style="list-style-type: disc; margin-left: 20px;">
    <li style="margin-bottom: 10px;">
        <a href="https://nvd.nist.gov/vuln/detail/cve-2021-42574" style="color: #3162d4;"><strong>CVE-2021-42574</strong></a>. This vulnerability involves the use of bidirectional Unicode codepoints in source code, which could lead to discrepancies between reviewed and compiled code. Rust introduced lints in version 1.56.1 to detect and reject such codepoints, mitigating the risk of this attack.
    </li>
    <li style="margin-bottom: 10px;">
        Studies estimate that <strong>70% of critical vulnerabilities</strong> in Microsoft Products stem from memory safety issues <a href="#ref1" style="color: #3162d4;" onclick="document.getElementById('ref1').scrollIntoView({ behavior: 'smooth' }); return false;">[1]</a>
    </li>
    <li style="margin-bottom: 10px;">
        The Linux kernel, predominantly written in C, reported over <strong>1,858 CVEs</strong> in the past decade, much of them memory-related, including high-severity exploits in networking and driver subsystems <a href="#ref2" style="color: #3162d4;" onclick="document.getElementById('ref2').scrollIntoView({ behavior: 'smooth' }); return false;">[2]</a>
    </li>
</ul>

<h3>Case Studies</h3>

<h4>1. Rust Adoption in Critical Systems</h4>
<ul style="list-style-type: disc; margin-left: 20px;">
    <li style="margin-bottom: 10px;">
        <strong>Aerospace: Gama Space</strong><br>
         Gama Space is a company that specializes in developing innovative solutions for satellite and space technology applications. Gama specializes in the development of solar sails. Gama employs Rust to enhance the reliability and performance of software systems used in space missions <a href="#ref3" style="color: #3162d4;" onclick="document.getElementById('ref3').scrollIntoView({ behavior: 'smooth' }); return false;">[3]</a>
    </li>
    <li style="margin-bottom: 10px;">
        <strong>Embedded Systems: Volvo’s Automotive Software</strong><br>
        Volvo is using the Rust programming language to develop new software for its cars <a href="#ref3" style="color: #3162d4;" onclick="document.getElementById('ref3').scrollIntoView({ behavior: 'smooth' }); return false;">[3]</a>
    </li>
</ul>

<h4>2. Rewriting Codes to Rust</h4>
<ul style="list-style-type: disc; margin-left: 20px;">
    <li style="margin-bottom: 10px;">
        <strong>Servo Browser Engine</strong><br>
        Mozilla’s Servo project replaced C++ components with Rust, eliminating all use-after-free and buffer overflow vulnerabilities in its rendering pipeline <a href="#ref5" style="color: #3162d4;" onclick="document.getElementById('ref5').scrollIntoView({ behavior: 'smooth' }); return false;">[5]</a>
    </li>
    <li style="margin-bottom: 10px;">
        <strong>Cloudflare’s Public DNS Resolver</strong><br>
        Cloudflare transitioned from Knot Resolver (Lua-based) to Rust for better performance, memory safety, and debugging in its DNS resolver. Rust’s async/await improved I/O handling, making it more efficient. WebAssembly (Wasm) was integrated for secure, portable execution. Cloudflare Workers now support multiple languages, including Rust, enhancing flexibility. This shift significantly improved performance, security, and scalability <a href="#ref4" style="color: #3162d4;" onclick="document.getElementById('ref4').scrollIntoView({ behavior: 'smooth' }); return false;">[4]</a>
    </li>
</ul>

<h2 align="center">Code & General Performance Comparisons</h2>
<p>In order to make these comparisons, I wrote codes as similar as possible between one language and another, generated some graphs, and fetched some data that can be useful for the best comparison of memory usage and performance I could think of using simple methods and codes.</p>
<h3>Quick Sort Algorithm</h3>
<p>To test the memory performance, I made two similiar quick sort codes and generated a graph using valgrind. In the codes, I used a text file with 100.000 random numbers on the range of 1 to 10.000 for the array of numbers. Here are the codes:</p>
<h3>Rust:</h3>
<div style="background-color: #2b2b2b; color: #f8f8f2; padding: 10px; border-radius: 5px; overflow-x: auto; font-size: 13px;">
    <p style="font-family: monospace; margin: 0;">
        <span style="color: #66d9ef;">use</span> std::fs;<br>
        <span style="color: #66d9ef;">use</span> std::io;<br><br>
        <span style="color: #66d9ef;">fn</span> quicksort(arr: &amp;mut [i32]) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66d9ef;">if</span> arr.len() &lt;= 1 {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66d9ef;">return</span>;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66d9ef;">let</span> pivot_index = partition(arr);<br>
        &nbsp;&nbsp;&nbsp;&nbsp;quicksort(&amp;mut arr[0..pivot_index]);<br>
        &nbsp;&nbsp;&nbsp;&nbsp;quicksort(&amp;mut arr[pivot_index + 1..]);<br>
        }<br><br>
        <span style="color: #66d9ef;">fn</span> partition(arr: &amp;mut [i32]) -&gt; usize {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66d9ef;">let</span> pivot_index = arr.len() / 2;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;arr.swap(pivot_index, arr.len() - 1);<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66d9ef;">let</span> mut i = 0;<br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66d9ef;">for</span> j in 0..arr.len() - 1 {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66d9ef;">if</span> arr[j] &lt;= arr[arr.len() - 1] {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr.swap(i, j);<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i += 1;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;arr.swap(i, arr.len() - 1);<br>
        &nbsp;&nbsp;&nbsp;&nbsp;i<br>
        }<br><br>
        <span style="color: #75715e;">// FILE HANDLING</span><br><br>
        <span style="color: #66d9ef;">fn</span> main() -&gt; Result&lt;(), io::Error&gt; {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66d9ef;">let</span> filename = <span style="color: #e6db74;">"random_numbers.txt"</span>;<br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66d9ef;">let</span> mut numbers = parse_numbers_from_file(filename)?;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;println!(<span style="color: #e6db74;">"Before sorting: {:?}"</span>, numbers);<br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;quicksort(&amp;mut numbers);<br>
        &nbsp;&nbsp;&nbsp;&nbsp;println!(<span style="color: #e6db74;">"After sorting: {:?}"</span>, numbers);<br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;Ok(())<br>
        }
    </p>
</div>

<h3>C:</h3>
<div style="background-color: #2b2b2b; color: #f8f8f2; padding: 10px; border-radius: 5px; overflow-x: auto; font-size: 13px;">
    <p style="font-family: monospace; margin: 0;">
        <span style="color: #66d9ef;">#include</span> &lt;stdio.h&gt;<br>
        <span style="color: #66d9ef;">#include</span> &lt;stdlib.h&gt;<br>
        <span style="color: #66d9ef;">#include</span> &lt;string.h&gt;<br><br>
        <span style="color: #66d9ef;">void</span> swap(<span style="color: #66d9ef;">int</span> *a, <span style="color: #66d9ef;">int</span> *b) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66d9ef;">int</span> temp = *a;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;*a = *b;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;*b = temp;<br>
        }<br><br>
        <span style="color: #66d9ef;">int</span> partition(<span style="color: #66d9ef;">int</span> arr[], <span style="color: #66d9ef;">int</span> low, <span style="color: #66d9ef;">int</span> high) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66d9ef;">int</span> pivot = arr[high];<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66d9ef;">int</span> i = low - 1;<br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66d9ef;">for</span> (<span style="color: #66d9ef;">int</span> j = low; j &lt; high; j++) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66d9ef;">if</span> (arr[j] &lt;= pivot) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i++;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap(&amp;arr[i], &amp;arr[j]);<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br>
        &nbsp;&nbsp;&nbsp;&nbsp;swap(&amp;arr[i + 1], &amp;arr[high]);<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66d9ef;">return</span> i + 1;<br>
        }<br><br>
        <span style="color: #66d9ef;">void</span> quicksort(<span style="color: #66d9ef;">int</span> arr[], <span style="color: #66d9ef;">int</span> low, <span style="color: #66d9ef;">int</span> high) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66d9ef;">if</span> (low &lt; high) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66d9ef;">int</span> pivot_index = partition(arr, low, high);<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quicksort(arr, low, pivot_index - 1);<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quicksort(arr, pivot_index + 1, high);<br>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br>
        }<br><br>
        <span style="color: #75715e;">// FILE HANDLING</span><br><br>
        <span style="color: #66d9ef;">int</span> main() {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66d9ef;">const</span> <span style="color: #66d9ef;">char</span> *filename = <span style="color: #e6db74;">"random_numbers.txt"</span>;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66d9ef;">int</span> *numbers;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66d9ef;">int</span> count = parse_numbers_from_file(filename, &amp;numbers);<br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66d9ef;">if</span> (count &lt;= 0) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fprintf(stderr, <span style="color: #e6db74;">"Failed to parse numbers from file"</span>);<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66d9ef;">return</span> 1;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;printf(<span style="color: #e6db74;">"Before sorting: "</span>);<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66d9ef;">for</span> (<span style="color: #66d9ef;">int</span> i = 0; i &lt; count; i++) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf(<span style="color: #e6db74;">"%d "</span>, numbers[i]);<br>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br>
        &nbsp;&nbsp;&nbsp;&nbsp;printf(<span style="color: #e6db74;">"\n"</span>);<br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;quicksort(numbers, 0, count - 1);<br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;printf(<span style="color: #e6db74;">"After sorting: "</span>);<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66d9ef;">for</span> (<span style="color: #66d9ef;">int</span> i = 0; i &lt; count; i++) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf(<span style="color: #e6db74;">"%d "</span>, numbers[i]);<br>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br>
        &nbsp;&nbsp;&nbsp;&nbsp;printf(<span style="color: #e6db74;">"\n"</span>);<br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;free(numbers);<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66d9ef;">return</span> 0;<br>
        }
    </p>
</div>

<p>Here are the test results:</p>
<p align="center">
  <img src="/blog/rust-vs-c/02.png" height="450" width="450" alt="Second">
</p>
<p align="center">
  <img src="/blog/rust-vs-c/03.png" height="450" width="450" alt="Third">
</p>

<table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead>
        <tr>
            <th style="border: 1px solid #444; padding: 10px; text-align: left; background-color: #333; color: #ffffff;">Metric</th>
            <th style="border: 1px solid #444; padding: 10px; text-align: left; background-color: #333; color: #ffffff;">C Implementation</th>
            <th style="border: 1px solid #444; padding: 10px; text-align: left; background-color: #333; color: #ffffff;">Rust Implementation</th>
            <th style="border: 1px solid #444; padding: 10px; text-align: left; background-color: #333; color: #ffffff;">Winner</th>
        </tr>
    </thead>
    <tbody>
        <tr style="background-color: #1e1e1e;">
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;"><strong style="color: #ffffff;">Peak Memory Usage</strong></td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;">988,714 bytes</td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;">1,113,057 bytes</td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;">C (lower peak memory)</td>
        </tr>
        <tr style="background-color: #2d2d2d;">
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;"><strong style="color: #ffffff;">Execution Time</strong></td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;">255,998,458 instructions</td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;">153,283,753 instructions</td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;">Rust (faster execution)</td>
        </tr>
        <tr style="background-color: #1e1e1e;">
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;"><strong style="color: #ffffff;">Memory Fragmentation</strong></td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;">Low</td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;">High</td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;">C (less fragmented)</td>
        </tr>
        <tr style="background-color: #2d2d2d;">
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;"><strong style="color: #ffffff;">Memory Management</strong></td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;">Simple, large allocations</td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;">Granular, small allocations</td>
            <td style="border: 1px solid #444; padding: 10px; text-align: left; color: #ffffff;">C (simpler management)</td>
        </tr>
    </tbody>
</table>

<p>It is important to highlight, based on the results, that this was a <strong>very simple example</strong> and cannot be compared to <strong>complex systems</strong>. Now, analyzing the results, it is evident that when used correctly, C does not present major memory issues. However, in my opinion, the problem with C is that the "freedom" it gives the programmer to manage memory entirely can become a challenge as the codebase grows. Memory safety is not only about the internal functioning of the program but is also closely tied to the source code itself. That said, Rust’s ability to handle memory management both internally and externally reduces potential bugs and memory leaks as the code scales while also ensuring memory safety.</p>
<p>Also, Rust may use slightly more memory due to safety checks (e.g., bounds checking), but the difference is often negligible. In our test, C had better memory management results primarily because of the simplicity of the code. We can assume that in more complex systems, the results would likely be similar, or Rust might even perform better. The point is, Rust achieves memory safety without runtime overhead, making it a strong choice for performance-critical systems.</p>
<p>I also implemented a matrix multiplication test, but the results were kinda the same. Given the simplicity of the tests, I don't think any further validation is necessary.</p>

<h2 align="center">Challenges, Trade-offs and Recommendations</h2>
<p>With all of this being said, I think we can now make good (although superficial) comparisons between the two languages. In this section, we will also discuss in which cases using Rust can be more advantageous than using C and vice versa. Additionally, we’ll acknowledge the limitations and practical considerations of both languages to help you make an informed decision about which language to use for your critical systems.</p>

<h3>Rust: Challenges and Trade-offs</h3>

<h4>Learning Curve</h4>
<p>Like I said before, Rust’s memory safety guarantees come at the cost of a steeper learning curve, particularly due to its borrow checker. For example:</p>
<ul style="list-style-type: disc; margin-left: 20px;">
    <li style="margin-bottom: 10px;">
        The borrow checker enforces strict rules around ownership, borrowing, and lifetimes, which can be challenging for developers accustomed to the more permissive memory management model of C.
    </li>
    <li style="margin-bottom: 10px;">
        While this complexity pays off in terms of safety, it can slow down initial development as teams ramp up.
    </li>
</ul>

<h4>Slower Compilation Times</h4>
<p>Rust’s compilation times are generally slower than C’s, especially for larger projects:</p>
<ul style="list-style-type: disc; margin-left: 20px;">
    <li style="margin-bottom: 10px;">
        This is partly due to Rust’s extensive compile-time checks and its modern toolchain, which prioritizes safety and optimization over speed.
    </li>
    <li style="margin-bottom: 10px;">
        While incremental compilation helps mitigate this, it remains a consideration for time-sensitive development cycles.
    </li>
    <li style="margin-bottom: 10px;">
        Sometimes a "cargo run" can turn into a "cargo crawl", it depends on how you use your crates and how you import their functionality into your code, the compilation time can grow exponentially as the code grows and you add more external functionality to it.
    </li>
</ul>

<h4>Limited Ecosystem for Certain Domains</h4>
<p>Rust’s ecosystem, while growing rapidly, is still maturing:</p>
<ul style="list-style-type: disc; margin-left: 20px;">
    <li style="margin-bottom: 10px;">
        In domains like legacy embedded systems or highly specialized industries, C often has a significant advantage due to decades of tooling, libraries, and vendor support.
    </li>
    <li style="margin-bottom: 10px;">
        Rust may lack mature libraries or frameworks for niche use cases, though this is changing as the community expands.
    </li>
</ul>

<h3>C: Challenges and Trade-offs</h3>

<h4>Legacy Codebases and Vendor Support</h4>
<p>C has been the dominant language of systems programming for decades:</p>
<ul style="list-style-type: disc; margin-left: 20px;">
    <li style="margin-bottom: 10px;">
        This results in vast legacy codebases and extensive vendor support, but transitioning to a modern language like Rust can be challenging, especially when dealing with proprietary or tightly coupled systems.
    </li>
</ul>

<h4>Developer Familiarity and Tooling Maturity</h4>
<p>C’s simplicity and widespread use mean that many developers are already familiar with it:</p>
<ul style="list-style-type: disc; margin-left: 20px;">
    <li style="margin-bottom: 10px;">
        Its tooling (e.g., debuggers, profilers, and static analyzers) is highly mature, but this familiarity can sometimes lead to complacency, as developers may overlook modern safety practices that Rust enforces by design.
    </li>
</ul>

<h3>Recommendations: When to Use Rust vs. C</h3>

<h4>Use Rust When:</h4>
<ul style="list-style-type: disc; margin-left: 20px;">
    <li style="margin-bottom: 10px;">
        <strong>Memory Safety is Critical</strong>: Rust’s ownership model eliminates entire classes of memory-related bugs, making it ideal for security-critical systems like operating systems, browsers, or cryptographic libraries.
    </li>
    <li style="margin-bottom: 10px;">
        <strong>Starting a New Project</strong>: Rust’s modern tooling, package manager (Cargo), and growing ecosystem make it an excellent choice for greenfield projects where you can avoid the constraints of legacy systems.
    </li>
    <li style="margin-bottom: 10px;">
        <strong>Concurrency is a Priority</strong>: Rust’s fearless concurrency model ensures thread safety at compile time, making it a strong candidate for systems requiring high parallelism.
    </li>
</ul>

<h4>Use C When:</h4>
<ul style="list-style-type: disc; margin-left: 20px;">
    <li style="margin-bottom: 10px;">
        <strong>Working with Legacy Systems</strong>: If you’re maintaining or extending an existing C codebase, it’s often more practical to stick with C rather than rewriting everything in Rust.
    </li>
    <li style="margin-bottom: 10px;">
        <strong>Resource Constraints are Extreme</strong>: In deeply embedded systems with extremely limited resources, C’s simplicity and minimal runtime overhead may still be preferable.
    </li>
    <li style="margin-bottom: 10px;">
        <strong>Vendor or Industry Requirements Dictate It</strong>: Some industries (e.g., automotive, aerospace) have long-standing standards and toolchains built around C, making it the pragmatic choice.
    </li>
</ul>

<h2 align="center">Conclusion</h2>
<p>My point is, C has its highs and lows (not that I hate C, I absolutely love it), and I think that Rust is a pretty new language with a lot to improve. But I do believe that in the near future, Rust can overcome C (due to the same capability and MAYBE efficiency, but better safety). And at that time, the only barrier for Big Techs and companies to change their entire systems from C to Rust will be the inconvenience (both in time, difficulty, and cost) of reprogramming thousands of lines of code written over the last 30 to 50 years from one language to another.</p>

<hr style="border: 1px solid #444; margin: 20px 0;">

<h2 align="center" id="references">References</h2>
<ol style="margin-left: 20px;">
    <li id="ref1">CISA, America's Cyber Defense Agency - <a href="https://www.cisa.gov/news-events/news/urgent-need-memory-safety-software-products" style="color: #3162d4;">https://www.cisa.gov/news-events/news/urgent-need-memory-safety-software-products</a></li>
    <li id="ref2">Understanding Linux kernel vulnerabilities - <a href="https://www.researchgate.net/publication/350624677_Understanding_Linux_kernel_vulnerabilities#pf3" style="color: #3162d4;">https://www.researchgate.net/publication/350624677_Understanding_Linux_kernel_vulnerabilities#pf3</a></li>
    <li id="ref3">The Embedded Rustacean - <a href="https://www.theembeddedrustacean.com/p/embedded-rust-adoption-tracking" style="color: #3162d4;">https://www.theembeddedrustacean.com/p/embedded-rust-adoption-tracking</a></li>
    <li id="ref4">The Cloudflare Blog - <a href="https://blog.cloudflare.com/big-pineapple-intro/" style="color: #3162d4;">https://blog.cloudflare.com/big-pineapple-intro/</a></li>
    <li id="ref5">Mozilla's Servo - <a href="https://servo.org/" style="color: #3162d4;">https://servo.org/</a></li>
    <li id="ref6">Introduction to "Safe and Secure Coding in Rust: A Comparative Analysis of Rust and C/C++" - <a href="https://luk6xff.github.io/other/safe_secure_rust_book/index.html" style="color: #3162d4;">https://luk6xff.github.io/other/safe_secure_rust_book/index.html</a></li>
</ol>