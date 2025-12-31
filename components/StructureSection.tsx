"use client";

import { File, Folder, Tree } from "./ui/file-tree";

export default function StructureSection() {
  return (
    <section id="structure" className="py-[60px] md:py-[120px] bg-[#f6f6f6]">
      <div className="max-w-[1400px] mx-auto px-[5%]">
        <div className="grid md:grid-cols-2 gap-[40px] md:gap-[80px] items-center">
          <div>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] mb-[16px] md:mb-[24px] text-[#1a1a1a]">
              Repository<br />Structure
            </h2>
            <div className="mb-[24px]">
              <div className="inline-block px-[16px] md:px-[20px] py-[8px] md:py-[10px] bg-[#1a1a1a] rounded-[8px] text-[10px] md:text-[12px] font-semibold uppercase tracking-[1.5px] text-[#ffffff]">
                Our system organizes repository data into a comprehensive memory structure that tracks evolution, relationships, and context.
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[16px] md:rounded-[20px] border-2 border-gray-200 shadow-lg p-[16px] md:p-[24px]">
            <Tree
              className="w-full"
              initialExpandedItems={["1", "2", "3", "4", "10", "11"]}
            >
              <Folder element="." value="1">
                <Folder value="2" element="backend">
                  <Folder value="3" element="src">
                    <File value="4">
                      <p>server.js</p>
                    </File>
                    <Folder value="5" element="config" />
                    <Folder value="6" element="routes">
                      <File value="7">
                        <p>aiRoutes.js</p>
                      </File>
                      <File value="8">
                        <p>repoRoutes.js</p>
                      </File>
                    </Folder>
                    <Folder value="9" element="services">
                      <File value="10">
                        <p>mockData.js</p>
                      </File>
                    </Folder>
                  </Folder>
                  <File value="11">
                    <p>package.json</p>
                  </File>
                  <File value="12">
                    <p>package-lock.json</p>
                  </File>
                </Folder>
                
                <Folder value="13" element="frontend">
                  <Folder value="14" element="src">
                    <File value="15">
                      <p>App.js</p>
                    </File>
                    <File value="16">
                      <p>index.js</p>
                    </File>
                    <Folder value="17" element="components">
                      <File value="18">
                        <p>Header.js</p>
                      </File>
                      <File value="19">
                        <p>LoadingSpinner.js</p>
                      </File>
                    </Folder>
                    <Folder value="20" element="pages">
                      <File value="21">
                        <p>ChatInterface.js</p>
                      </File>
                      <File value="22">
                        <p>Dashboard.js</p>
                      </File>
                      <File value="23">
                        <p>Login.js</p>
                      </File>
                      <File value="24">
                        <p>OnboardingTour.js</p>
                      </File>
                      <File value="25">
                        <p>StarterTasks.js</p>
                      </File>
                    </Folder>
                  </Folder>
                  <Folder value="26" element="public">
                    <File value="27">
                      <p>index.html</p>
                    </File>
                  </Folder>
                  <File value="28">
                    <p>package.json</p>
                  </File>
                  <File value="29">
                    <p>package-lock.json</p>
                  </File>
                </Folder>
              </Folder>
            </Tree>
          </div>
        </div>
      </div>
    </section>
  );
}
