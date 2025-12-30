"use client";

import { File, Folder, Tree } from "./ui/file-tree";

export default function StructureSection() {
  return (
    <section id="structure" className="py-[120px] bg-[#f6f6f6]">
      <div className="max-w-[1400px] mx-auto px-[5%]">
        <div className="grid md:grid-cols-2 gap-[80px] items-center">
          <div>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] mb-[24px] text-[#1a1a1a]">
              Repository<br />Structure
            </h2>
            <div className="mb-[24px]">
              <div className="inline-block px-[20px] py-[10px] bg-[#1a1a1a] rounded-[8px] text-[12px] font-semibold uppercase tracking-[1.5px] text-[#ffffff]">
                Our system organizes repository data into a comprehensive memory structure that tracks evolution, relationships, and context.
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[20px] border-2 border-gray-200 shadow-lg p-[24px]">
            <Tree
              className="w-full"
              initialExpandedItems={["1", "2", "3", "12", "13", "14"]}
            >
              <Folder element="codebase-onboarding-assistant" value="1">
                <Folder value="2" element="frontend">
                  <Folder value="3" element="src">
                    <Folder value="4" element="components" />
                    <Folder value="5" element="pages" />
                    <Folder value="6" element="services" />
                    <Folder value="7" element="hooks" />
                    <File value="8">
                      <p>App.jsx</p>
                    </File>
                  </Folder>
                  <Folder value="9" element="public" />
                  <File value="10">
                    <p>package.json</p>
                  </File>
                  <File value="11">
                    <p>README.md</p>
                  </File>
                </Folder>
                
                <Folder value="12" element="backend">
                  <Folder value="13" element="app">
                    <Folder value="14" element="api">
                      <File value="15">
                        <p>ingestion.py</p>
                      </File>
                      <File value="16">
                        <p>analysis.py</p>
                      </File>
                      <File value="17">
                        <p>onboarding.py</p>
                      </File>
                      <File value="18">
                        <p>qa.py</p>
                      </File>
                      <File value="19">
                        <p>tasks.py</p>
                      </File>
                      <File value="20">
                        <p>auth.py</p>
                      </File>
                    </Folder>
                    
                    <Folder value="21" element="services">
                      <File value="22">
                        <p>llm_service.py</p>
                      </File>
                      <File value="23">
                        <p>parser_service.py</p>
                      </File>
                      <File value="24">
                        <p>storage_service.py</p>
                      </File>
                    </Folder>
                    
                    <File value="25">
                      <p>main.py</p>
                    </File>
                  </Folder>
                  
                  <File value="26">
                    <p>requirements.txt</p>
                  </File>
                  <File value="27">
                    <p>README.md</p>
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
