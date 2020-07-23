package com.techmount.customerportal.data;

public class JavaJSONMapping {

	private String key;
	
	private String header;
	
	public JavaJSONMapping() {

	}

	public JavaJSONMapping(String key, String header) {
		super();
		this.key = key;
		this.header = header;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public String getHeader() {
		return header;
	}

	public void setHeader(String header) {
		this.header = header;
	}

	@Override
	public String toString() {
		return "JavaJSONMapping {key:" + key + ", header:" + header + "}";
	}
	
}
